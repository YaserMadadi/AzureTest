
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { Menu } from '../menu';
import { UserAccount } from '../../base/userAccount';



export class UserType extends BaseEntity implements IBaseEntity<UserType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = UserType.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('admin', 'userType', 'User Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;
	
	public note: string = '';

	//#endregion
    
  //#region Collection Properties

  public listOfMenu: Menu[] = [];
	
	public listOfUserAccount: UserAccount[] = [];

  //#endregion

  public static Validate(userType: UserType) : boolean {
    let result = 
      Validator.Validate(userType.title);

    if(result === false)
      console.log('UserType is unvalid : ', userType);

    return result;
  }
}
