
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { AcceptedPetCategory } from '../acceptedPetCategory';



export class PetCategory extends BaseEntity implements IBaseEntity<PetCategory> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PetCategory.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'petCategory', 'Pet Category');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfAcceptedPetCategory: AcceptedPetCategory[] = [];

  //#endregion

  public static Validate(petCategory: PetCategory) : boolean {
    let result = 
      Validator.Validate(petCategory.title);

    if(result === false)
      console.log('PetCategory is unvalid : ', petCategory);

    return result;
  }
}
