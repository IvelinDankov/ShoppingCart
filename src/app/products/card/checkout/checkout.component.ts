import { Component, inject } from "@angular/core";
import { CardServiceService } from "../../../card-service.service.js";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-checkout",
  imports: [CurrencyPipe],
  templateUrl: "./checkout.component.html",
  styleUrl: "./checkout.component.scss",
})
export class CheckoutComponent {
  cartService = inject(CardServiceService);
}
