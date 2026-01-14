import { Component, inject, input } from "@angular/core";
import { Product } from "../../product.model.js";
import { CardServiceService } from "../../card-service.service.js";

@Component({
  selector: "app-card",
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  product = input.required<Product>();
  cartService = inject(CardServiceService);

  onAddToCart(product: Product) {
    this.cartService.addToBasket(product);
  }
}
