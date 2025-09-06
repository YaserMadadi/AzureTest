import { CommonModule } from "@angular/common";
import { Component, input, Input } from "@angular/core";

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.html',
  imports: [
    CommonModule
  ]
})
export class CarouselItem {

  @Input()
  imageUrl: string = '';

  @Input()
  imageClass: string = '';

}