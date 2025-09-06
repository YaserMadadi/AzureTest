
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { BackgroundCheckStatus } from '../backgroundCheckStatus';
import { Gender } from '../gender';
import { Provider } from '../provider';




export class IndividualProvider extends Provider implements IBaseEntity<IndividualProvider> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = IndividualProvider.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'individualProvider', 'Individual Provider');

  //endregion

  //#region Fields

	public firstName: string = '';
	
	public middleName: string = '';
	
	public lastName: string = '';
	
	public nickName: string = '';
	
	public gender?: Gender = new Gender();
	
	public dateOfBirth?: Date = new Date();
	
	public yearsOfExperience: number = 0;
	
	public backgroundCheckStatus?: BackgroundCheckStatus = new BackgroundCheckStatus();

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static override Validate(individualProvider: IndividualProvider) : boolean {
    let result = 
      Provider.Validate(individualProvider) &&
		Validator.Validate(individualProvider.firstName) &&
		Validator.Validate(individualProvider.middleName) &&
		Validator.Validate(individualProvider.lastName) &&
		Validator.Validate(individualProvider.nickName) &&
		Validator.Validate(individualProvider.gender) &&
		Validator.Validate(individualProvider.dateOfBirth) &&
		Validator.Validate(individualProvider.backgroundCheckStatus);

    if(result === false)
      console.log('IndividualProvider is unvalid : ', individualProvider);

    return result;
  }
}
