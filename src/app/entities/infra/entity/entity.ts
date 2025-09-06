
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { RolePermission } from '../../admin/rolePermission';
import { StaffPermission } from '../../admin/staffPermission';



export class Entity extends BaseEntity implements IBaseEntity<Entity> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Entity.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('infra', 'entity', 'Entity');

  //endregion

  //#region Fields

	public schema: string = '';
	
	public name: string = '';
	
	public synonym: string = '';
	
	public guideTitle: string = '';
	
	public indexUrl: string = '';
	
	public recordPerPage: number = 0;
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfRolePermission: RolePermission[] = [];
	
	public listOfStaffPermission: StaffPermission[] = [];

  //#endregion

  public static Validate(entity: Entity) : boolean {
    let result = 
      Validator.Validate(entity.schema) &&
		Validator.Validate(entity.name) &&
		Validator.Validate(entity.synonym) &&
		Validator.Validate(entity.guideTitle) &&
		Validator.Validate(entity.indexUrl);

    if(result === false)
      console.log('Entity is unvalid : ', entity);

    return result;
  }
}
