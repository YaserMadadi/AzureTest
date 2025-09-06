
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';





export class InsuranceType extends BaseEntity implements IBaseEntity<InsuranceType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = InsuranceType.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'insuranceType', 'Insurance Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(insuranceType: InsuranceType) : boolean {
    let result = 
      Validator.Validate(insuranceType.title);

    if(result === false)
      console.log('InsuranceType is unvalid : ', insuranceType);

    return result;
  }
}
