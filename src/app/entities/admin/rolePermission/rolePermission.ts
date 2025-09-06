
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Entity } from '../../infra/entity';
import { Role } from '../role';




export class RolePermission extends BaseEntity implements IBaseEntity<RolePermission> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = RolePermission.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('admin', 'rolePermission', 'Role Permission');

  //endregion

  //#region Fields

	public role?: Role = new Role();
	
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

  public static Validate(rolePermission: RolePermission) : boolean {
    let result = 
      Validator.Validate(rolePermission.role) &&
		Validator.Validate(rolePermission.entity);

    if(result === false)
      console.log('RolePermission is unvalid : ', rolePermission);

    return result;
  }
}
