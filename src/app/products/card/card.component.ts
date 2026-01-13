import { Component, input } from "@angular/core";
import { Product } from "../../product.model.js";

@Component({
  selector: "app-card",
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  product = input<Product>();
}
