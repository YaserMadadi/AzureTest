
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Menu } from '.';
import { MenuItem, MenuItem_Builder } from '../menuItem';


@Injectable({ providedIn: 'root' })
export class Menu_ServiceCollection extends ServiceCollection<Menu> implements IServiceCollection<Menu> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfMenuItem(menu_id: number, menuItem: MenuItem = MenuItem_Builder.BuildSeekInstance()): Observable<MenuItem[]> {
    return super.CollectionOf<MenuItem>(new Menu(menu_id), menuItem);
  }

	//#endregion
}
