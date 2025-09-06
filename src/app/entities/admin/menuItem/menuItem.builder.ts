

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { MenuItem } from '.';


@Injectable({ providedIn: 'root' })
export class MenuItem_Builder extends ServiceBuilder<MenuItem> implements IServiceBuilder<MenuItem> {

  constructor() {
        super();
    }

  
  BuildInstance(): MenuItem;
  BuildInstance(id: number): MenuItem;
  BuildInstance(id: number, descriptor: string): MenuItem;
  BuildInstance(id: number = 0, descriptor: string = ''): MenuItem {
    return new MenuItem(id, descriptor);
  }

  BuildSeekInstance(): MenuItem {
    return MenuItem_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): MenuItem {
    let menuItem = new MenuItem();
    menuItem.menu = undefined;
		menuItem.isActive = undefined;
    return menuItem;
  }
}