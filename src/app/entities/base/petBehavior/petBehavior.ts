
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { BehaviorCategory } from '../behaviorCategory';
import { Pet } from '../pet';




export class PetBehavior extends BaseEntity implements IBaseEntity<PetBehavior> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PetBehavior.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'petBehavior', 'Pet Behavior');

  //endregion

  //#region Fields

	public pet?: Pet = new Pet();
	
	public behaviorCategory?: BehaviorCategory = new BehaviorCategory();
	
	public note: string = '';

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(petBehavior: PetBehavior) : boolean {
    let result = 
      Validator.Validate(petBehavior.pet) &&
		Validator.Validate(petBehavior.behaviorCategory);

    if(result === false)
      console.log('PetBehavior is unvalid : ', petBehavior);

    return result;
  }
}
