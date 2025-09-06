
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Menu } from '../menu';




export class MenuItem extends BaseEntity implements IBaseEntity<MenuItem> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MenuItem.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('admin', 'menuItem', 'Menu Item');

  //endregion

  //#region Fields

	public title: string = '';
	
	public icon: string = '';
	
	public url: string = '';
	
	public menu?: Menu = new Menu();
	
	public isActive?: boolean = false;
	
	public note: string = '';

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(menuItem: MenuItem) : boolean {
    let result = 
      Validator.Validate(menuItem.title) &&
		Validator.Validate(menuItem.icon) &&
		Validator.Validate(menuItem.url) &&
		Validator.Validate(menuItem.menu);

    if(result === false)
      console.log('MenuItem is unvalid : ', menuItem);

    return result;
  }
}
