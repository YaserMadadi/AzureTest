
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { PetBehavior } from '../petBehavior';



export class BehaviorCategory extends BaseEntity implements IBaseEntity<BehaviorCategory> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = BehaviorCategory.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'behaviorCategory', 'Behavior Category');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfPetBehavior: PetBehavior[] = [];

  //#endregion

  public static Validate(behaviorCategory: BehaviorCategory) : boolean {
    let result = 
      Validator.Validate(behaviorCategory.title);

    if(result === false)
      console.log('BehaviorCategory is unvalid : ', behaviorCategory);

    return result;
  }
}
