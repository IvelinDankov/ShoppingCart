import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component.js";
import { NoContentComponent } from "./no-content/no-content.component.js";
import { ProductsComponent } from "./products/products/products.component.js";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "**",
    component: NoContentComponent,
  },
];
