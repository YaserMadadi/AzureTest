
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { UserType } from '../userType';

import { MenuItem } from '../menuItem';



export class Menu extends BaseEntity implements IBaseEntity<Menu> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Menu.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('admin', 'menu', 'Menu');

  //endregion

  //#region Fields

	public userType?: UserType = new UserType();
	
	public title: string = '';
	
	public icon: string = '';
	
	public isActive?: boolean = false;
	
	public note: string = '';

	//#endregion
    
  //#region Collection Properties

  public listOfMenuItem: MenuItem[] = [];

  //#endregion

  public static Validate(menu: Menu) : boolean {
    let result = 
      Validator.Validate(menu.userType) &&
		Validator.Validate(menu.title) &&
		Validator.Validate(menu.icon);

    if(result === false)
      console.log('Menu is unvalid : ', menu);

    return result;
  }
}
