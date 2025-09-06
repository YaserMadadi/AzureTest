
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Country } from '../country';

import { City } from '../city';



export class Province extends BaseEntity implements IBaseEntity<Province> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Province.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'province', 'Province');

  //endregion

  //#region Fields

	public title: string = '';
	
	public country?: Country = new Country();
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfCity: City[] = [];

  //#endregion

  public static Validate(province: Province) : boolean {
    let result = 
      Validator.Validate(province.title) &&
		Validator.Validate(province.country);

    if(result === false)
      console.log('Province is unvalid : ', province);

    return result;
  }
}
