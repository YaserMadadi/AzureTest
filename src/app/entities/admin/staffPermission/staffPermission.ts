
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Entity } from '../../infra/entity';
import { Staff } from '../staff';




export class StaffPermission extends BaseEntity implements IBaseEntity<StaffPermission> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = StaffPermission.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('admin', 'staffPermission', 'Staff Permission');

  //endregion

  //#region Fields

	public staff?: Staff = new Staff();
	
	public entity?: Entity = new Entity();
	
	public addPermission?: boolean = false;
	
	public editPermission?: boolean = false;
	
	public deletePermission?: boolean = false;
	
	public viewPermission?: boolean = false;
	
	public isActive?: boolean = false;
	
	public note: string = '';

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(staffPermission: StaffPermission) : boolean {
    let result = 
      Validator.Validate(staffPermission.staff) &&
		Validator.Validate(staffPermission.entity);

    if(result === false)
      console.log('StaffPermission is unvalid : ', staffPermission);

    return result;
  }
}
