
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { RoleMember } from '../roleMember';
import { RolePermission } from '../rolePermission';



export class Role extends BaseEntity implements IBaseEntity<Role> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Role.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('admin', 'role', 'Role');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;
	
	public note: string = '';

	//#endregion
    
  //#region Collection Properties

  public listOfRoleMember: RoleMember[] = [];
	
	public listOfRolePermission: RolePermission[] = [];

  //#endregion

  public static Validate(role: Role) : boolean {
    let result = 
      Validator.Validate(role.title);

    if(result === false)
      console.log('Role is unvalid : ', role);

    return result;
  }
}
