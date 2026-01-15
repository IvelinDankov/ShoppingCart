import { Component, inject, input } from "@angular/core";
import { Product } from "../../../product.model.js";
import { CurrencyPipe } from "@angular/common";
import { CardServiceService } from "../../../card-service.service.js";

@Component({
  selector: "app-cart-item",
  imports: [CurrencyPipe],
  templateUrl: "./cart-item.component.html",
  styleUrl: "./cart-item.component.scss",
})
export class CartItemComponent {
  item = input.required<Product>();
  private cartService = inject(CardServiceService);

  onRemoveItem() {
    this.cartService.removeItem(this.item().id);
  }
}
