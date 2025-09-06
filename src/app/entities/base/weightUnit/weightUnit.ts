
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { Pet } from '../pet';



export class WeightUnit extends BaseEntity implements IBaseEntity<WeightUnit> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = WeightUnit.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'weightUnit', 'Weight Unit');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfPet: Pet[] = [];

  //#endregion

  public static Validate(weightUnit: WeightUnit) : boolean {
    let result = 
      Validator.Validate(weightUnit.title);

    if(result === false)
      console.log('WeightUnit is unvalid : ', weightUnit);

    return result;
  }
}
