
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { ServicePrice } from '../servicePrice';



export class PriceScope extends BaseEntity implements IBaseEntity<PriceScope> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PriceScope.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'priceScope', 'Price Scope');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfServicePrice: ServicePrice[] = [];

  //#endregion

  public static Validate(priceScope: PriceScope) : boolean {
    let result = 
      Validator.Validate(priceScope.title);

    if(result === false)
      console.log('PriceScope is unvalid : ', priceScope);

    return result;
  }
}
