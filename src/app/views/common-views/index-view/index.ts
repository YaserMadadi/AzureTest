import { Component } from "@angular/core";
import { ServiceSeekComponent } from "./service-seek/service-seek";
import { HowItWorkComponent } from "./how-it-work/how-it-work";
import { FeaturedProduct } from "./featured-product/featured-product";
import { BannerHero } from "./banner-hero/banner-hero";
import { Footer } from "./footer/footer";
import { AppHeader } from "./header/header";

@Component({
  selector: "app-index",
  templateUrl: "./index.html",
  styleUrls: ["./index.scss"],
  imports: [
    BannerHero,
    FeaturedProduct,
    HowItWorkComponent,
    ServiceSeekComponent,
    Footer,
    AppHeader
  ]
})
export class IndexComponent {
  // Component logic goes here
}
