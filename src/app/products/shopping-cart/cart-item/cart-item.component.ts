import { Component, input } from "@angular/core";
import { Product } from "../../../product.model.js";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-cart-item",
  imports: [CurrencyPipe],
  templateUrl: "./cart-item.component.html",
  styleUrl: "./cart-item.component.scss",
})
export class CartItemComponent {
  item = input.required<Product>();
}
