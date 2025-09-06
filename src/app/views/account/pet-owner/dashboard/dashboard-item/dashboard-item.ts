import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormModule } from "@coreui/angular";

@Component({
  selector: "dashboard-item",
  templateUrl: "./dashboard-item.html",
  styleUrls: ["./dashboard-item.scss"],
  imports: [
    CommonModule
  ]
})
export class DashboardItemComponent {
  // Component logic goes here

  editMode: boolean = false;

  @Input() title: string = "";
  @Input() content: string = "";
  @Input() buttonText: string = "update";
}