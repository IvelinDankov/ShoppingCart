import { Component, computed, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CardServiceService } from "../card-service.service.js";

@Component({
  selector: "app-header",
  imports: [RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  host: {
    class: "header",
  },
})
export class HeaderComponent {
  private cartService = inject(CardServiceService);

  totalQuantity = computed(() =>
    this.cartService.cart().reduce((sum, item) => sum + item.quantity, 0)
  );
}
