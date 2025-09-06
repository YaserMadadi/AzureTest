
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';





export class CheckConstraint extends BaseEntity implements IBaseEntity<CheckConstraint> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CheckConstraint.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('infra', 'checkConstraint', 'Check Constraint');

  //endregion

  //#region Fields

	public name: string = '';
	
	public schemaName: string = '';
	
	public entityName: string = '';
	
	public definition: string = '';
	
	public message: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(checkConstraint: CheckConstraint) : boolean {
    let result = 
      Validator.Validate(checkConstraint.name) &&
		Validator.Validate(checkConstraint.schemaName) &&
		Validator.Validate(checkConstraint.entityName) &&
		Validator.Validate(checkConstraint.definition) &&
		Validator.Validate(checkConstraint.message);

    if(result === false)
      console.log('CheckConstraint is unvalid : ', checkConstraint);

    return result;
  }
}
