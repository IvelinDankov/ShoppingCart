import { Component, DestroyRef, inject, OnInit, signal } from "@angular/core";
import { CardComponent } from "../card/card.component.js";
import { CardServiceService } from "../../card-service.service.js";
import { Product } from "../../product.model.js";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-products",
  imports: [CardComponent],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss",
})
export class ProductsComponent implements OnInit {
  private productService = inject(CardServiceService);
  private destroyRef = inject(DestroyRef);
  private http = inject(HttpClient);
  allProducts: Product[] = [];
  isLoading = signal(false);

  ngOnInit(): void {
    this.isLoading.set(true);
    const subs = this.http
      .get<Product[]>("product.json")
      .subscribe((products) => {
        this.allProducts = products; // Add this method to service
        this.isLoading.set(false);
      });
    this.destroyRef.onDestroy(() => {
      subs.unsubscribe();
    });
  }
}
