
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { City } from '../city';
import { Provider } from '../provider';




export class LocationCoverage extends BaseEntity implements IBaseEntity<LocationCoverage> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = LocationCoverage.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'locationCoverage', 'Location Coverage');

  //endregion

  //#region Fields

	public provider?: Provider = new Provider();
	
	public city?: City = new City();
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(locationCoverage: LocationCoverage) : boolean {
    let result = 
      Validator.Validate(locationCoverage.provider) &&
		Validator.Validate(locationCoverage.city);

    if(result === false)
      console.log('LocationCoverage is unvalid : ', locationCoverage);

    return result;
  }
}
