import { HttpClient } from "@angular/common/http";
import { computed, effect, Injectable, signal } from "@angular/core";
import { CartItem, Product } from "./product.model.js";

@Injectable({
  providedIn: "root",
})
export class CardServiceService {
  private products = signal<Product[]>([]);
  cart = signal<CartItem[]>([]);

  allProducts = this.products.asReadonly();

  // COMPUTED VALUES
  itemsCount = computed(() => this.cart().length);
  totalQuantity = computed(() =>
    this.cart().reduce((sum, item) => sum + item.quantity, 0)
  );
  totalPrice = computed(() =>
    this.cart().reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    )
  );

  /* READONLY SIGNALS */
  cartItems = this.cart.asReadonly();

  constructor(private http: HttpClient) {
    this.http.get<Product[]>("product.json").subscribe({
      next: (data) => {
        this.products.set(data);
        console.log(data);
      },
    });

    /* TO LOCALS STORAGE CART */

    effect(() => {
      localStorage.setItem("shopping-cart", JSON.stringify(this.cart()));
    });

    /* LOAD FROM LOCAL STORAGE */

    const saved = localStorage.getItem("shopping-cart");

    if (saved) {
      this.cart.set(JSON.parse(saved));
    }

    /* ADD PRODUCT TO BASKET OR INCREASE QUANTITY */
  }
  addToBasket(product: Product) {
    this.cart.update((items) => {
      const existing = items.find((item) => item.productId === product.id);

      if (existing) {
        return items.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...items,
        {
          productId: product.id,
          quantity: 1,
          product,
        },
      ];
    });
  }

  updateBasket(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }

    this.cart.update((items) =>
      items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  }

  removeItem(productId: number) {
    this.cart.update((items) =>
      items.filter((item) => item.productId !== productId)
    );
  }

  getItemQuantity(productId: number): number {
    const item = this.cart().find((item) => item.productId === productId);

    return item ? item.quantity : 0;
  }

  clearBasket() {
    this.cart.set([]);
  }
}
