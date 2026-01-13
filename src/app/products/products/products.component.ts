import { Component, inject } from "@angular/core";
import { CardComponent } from "../card/card.component.js";
import { CardServiceService } from "../../card-service.service.js";
import { Product } from "../../product.model.js";

@Component({
  selector: "app-products",
  imports: [CardComponent],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss",
})
export class ProductsComponent {
  private productService = inject(CardServiceService);

  allProducts: Product[] = this.productService.allProducts();
}
