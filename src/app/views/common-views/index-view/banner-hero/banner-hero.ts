import { Component } from "@angular/core";
import { CarouselItem } from "./Item/carousel-item";

@Component({
  selector: 'banner-hero',
  templateUrl: './banner-hero.html',
  imports: [
    CarouselItem
  ]
})
export class BannerHero {

}