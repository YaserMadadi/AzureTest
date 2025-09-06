
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { MedicationType } from '../medicationType';
import { Pet } from '../pet';




export class PetMedicalCondition extends BaseEntity implements IBaseEntity<PetMedicalCondition> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PetMedicalCondition.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'petMedicalCondition', 'Pet Medical Condition');

  //endregion

  //#region Fields

	public pet?: Pet = new Pet();
	
	public medicationType?: MedicationType = new MedicationType();
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(petMedicalCondition: PetMedicalCondition) : boolean {
    let result = 
      Validator.Validate(petMedicalCondition.pet) &&
		Validator.Validate(petMedicalCondition.medicationType);

    if(result === false)
      console.log('PetMedicalCondition is unvalid : ', petMedicalCondition);

    return result;
  }
}
