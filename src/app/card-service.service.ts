import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Product } from "./product.model.js";

@Injectable({
  providedIn: "root",
})
export class CardServiceService {
  products = signal<Product[]>([]);

  allProducts = this.products.asReadonly();

  constructor(private http: HttpClient) {
    this.http.get<Product[]>("product.json").subscribe({
      next: (data) => {
        this.products.set(data);
        console.log(data);
      },
    });
  }
}
