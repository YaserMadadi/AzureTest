import { Component, Input } from "@angular/core";

@Component({
  selector: 'item-card',
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.scss']
})
export class ItemCardComponent {
  // Component logic goes here
  @Input() title: string = 'title';
  @Input() description: string = 'body';
  @Input() imageUrl!: string;
}