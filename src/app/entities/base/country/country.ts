
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { Province } from '../province';



export class Country extends BaseEntity implements IBaseEntity<Country> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Country.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'country', 'Country');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfProvince: Province[] = [];

  //#endregion

  public static Validate(country: Country) : boolean {
    let result = 
      Validator.Validate(country.title);

    if(result === false)
      console.log('Country is unvalid : ', country);

    return result;
  }
}
