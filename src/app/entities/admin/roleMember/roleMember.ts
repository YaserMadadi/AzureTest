
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Role } from '../role';
import { UserAccount } from '../../base/userAccount';




export class RoleMember extends BaseEntity implements IBaseEntity<RoleMember> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = RoleMember.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('admin', 'roleMember', 'Role Member');

  //endregion

  //#region Fields

	public role?: Role = new Role();
	
	public userAccount?: UserAccount = new UserAccount();
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(roleMember: RoleMember) : boolean {
    let result = 
      Validator.Validate(roleMember.role) &&
		Validator.Validate(roleMember.userAccount);

    if(result === false)
      console.log('RoleMember is unvalid : ', roleMember);

    return result;
  }
}
