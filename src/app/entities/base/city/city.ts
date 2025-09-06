
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Province } from '../province';

import { Client } from '../client';
import { LocationCoverage } from '../locationCoverage';



export class City extends BaseEntity implements IBaseEntity<City> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = City.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'city', 'City');

  //endregion

  //#region Fields

	public title: string = '';
	
	public province?: Province = new Province();
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfClient: Client[] = [];
	
	public listOfLocationCoverage: LocationCoverage[] = [];

  //#endregion

  public static Validate(city: City) : boolean {
    let result = 
      Validator.Validate(city.title) &&
		Validator.Validate(city.province);

    if(result === false)
      console.log('City is unvalid : ', city);

    return result;
  }
}
