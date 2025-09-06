import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar';
import { Menu_ExtendedService } from '../../../extended-entities/admin/menu.extended.services';

@Component({
  selector: 'defalt-layout',
  templateUrl: './defalt-layout.html',
  styleUrls: ['./defalt-layout.scss'],
  imports: [
    RouterModule,
    SideBarComponent
  ]
})
export class DefaltLayoutComponent {



}
