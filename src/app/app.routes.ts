import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component.js";
import { NoContentComponent } from "./no-content/no-content.component.js";
import { ProductsComponent } from "./products/products/products.component.js";
import { ShoppingCartComponent } from "./products/shopping-cart/shopping-cart.component.js";
import { CheckoutComponent } from "./products/card/checkout/checkout.component.js";

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
    path: "shopping-cart",
    component: ShoppingCartComponent,
  },
  {
    path: "checkout",
    component: CheckoutComponent,
  },
  {
    path: "404",
    component: NoContentComponent,
  },
  {
    path: "**",
    redirectTo: "/404",
  },
];
