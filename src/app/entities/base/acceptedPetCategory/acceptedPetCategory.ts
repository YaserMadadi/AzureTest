
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { PetCategory } from '../petCategory';
import { Provider } from '../provider';




export class AcceptedPetCategory extends BaseEntity implements IBaseEntity<AcceptedPetCategory> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AcceptedPetCategory.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'acceptedPetCategory', 'Accepted Pet Category');

  //endregion

  //#region Fields

	public provider?: Provider = new Provider();
	
	public petCategory?: PetCategory = new PetCategory();
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(acceptedPetCategory: AcceptedPetCategory) : boolean {
    let result = 
      Validator.Validate(acceptedPetCategory.provider) &&
		Validator.Validate(acceptedPetCategory.petCategory);

    if(result === false)
      console.log('AcceptedPetCategory is unvalid : ', acceptedPetCategory);

    return result;
  }
}
