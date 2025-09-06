

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Menu } from '.';


@Injectable({ providedIn: 'root' })
export class Menu_Builder extends ServiceBuilder<Menu> implements IServiceBuilder<Menu> {

  constructor() {
        super();
    }

  
  BuildInstance(): Menu;
  BuildInstance(id: number): Menu;
  BuildInstance(id: number, descriptor: string): Menu;
  BuildInstance(id: number = 0, descriptor: string = ''): Menu {
    return new Menu(id, descriptor);
  }

  BuildSeekInstance(): Menu {
    return Menu_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Menu {
    let menu = new Menu();
    menu.userType = undefined;
		menu.isActive = undefined;
    return menu;
  }
}