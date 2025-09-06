import { CommonModule } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Menu_ExtendedService } from "../../../../extended-entities/admin/menu.extended.services";
import { lastValueFrom } from "rxjs";
import { Menu } from "../../../../entities/admin/menu";

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.html',
  styleUrls: ['./side-bar.scss'],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ]
})
export class SideBarComponent {

  menuService: Menu_ExtendedService = inject(Menu_ExtendedService);

  constructor() {

  }



  loadMenuItems() {
    lastValueFrom(this.menuService.LoadMenuByUserType(4)).then(data => this.menus = data);
  }

  initMenu() {
    this.menus = [];
  }

  ngOnInit() {
    this.loadMenuItems();
  }

  isCollapsed = false;
  submenuOpen: { [key: string]: boolean } = {};

  @Input() menus: Menu[] = [];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(menu: string) {
    this.submenuOpen[menu] = !this.submenuOpen[menu];
  }

}