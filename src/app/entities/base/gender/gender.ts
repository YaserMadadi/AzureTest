
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { Staff } from '../../admin/staff';
import { Client } from '../client';
import { IndividualProvider } from '../individualProvider';
import { Pet } from '../pet';



export class Gender extends BaseEntity implements IBaseEntity<Gender> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Gender.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'gender', 'Gender');

  //endregion

  //#region Fields

	public title: string = '';
	
	public preFix: string = '';

	//#endregion
    
  //#region Collection Properties

  public listOfStaff: Staff[] = [];
	
	public listOfClient: Client[] = [];
	
	public listOfIndividualProvider: IndividualProvider[] = [];
	
	public listOfPet: Pet[] = [];

  //#endregion

  public static Validate(gender: Gender) : boolean {
    let result = 
      Validator.Validate(gender.title) &&
		Validator.Validate(gender.preFix);

    if(result === false)
      console.log('Gender is unvalid : ', gender);

    return result;
  }
}
