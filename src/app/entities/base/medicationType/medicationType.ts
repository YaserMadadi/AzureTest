
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { PetMedicalCondition } from '../petMedicalCondition';



export class MedicationType extends BaseEntity implements IBaseEntity<MedicationType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MedicationType.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'medicationType', 'Medication Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfPetMedicalCondition: PetMedicalCondition[] = [];

  //#endregion

  public static Validate(medicationType: MedicationType) : boolean {
    let result = 
      Validator.Validate(medicationType.title);

    if(result === false)
      console.log('MedicationType is unvalid : ', medicationType);

    return result;
  }
}
