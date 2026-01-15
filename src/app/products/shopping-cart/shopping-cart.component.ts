import { Component, inject } from "@angular/core";
import { CardServiceService } from "../../card-service.service.js";
import { CartItemComponent } from "./cart-item/cart-item.component.js";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-shopping-cart",
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: "./shopping-cart.component.html",
  styleUrl: "./shopping-cart.component.scss",
})
export class ShoppingCartComponent {
  cartService = inject(CardServiceService);
}
