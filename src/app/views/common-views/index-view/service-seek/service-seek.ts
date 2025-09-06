import { Component } from "@angular/core";
import { ItemCardComponent } from "./item-card/item-card";

@Component({
  selector: "service-seek",
  templateUrl: "./service-seek.html",
  styleUrls: ["./service-seek.scss"],
  imports: [
    ItemCardComponent
  ]
})
export class ServiceSeekComponent {
  // Component logic goes here
}