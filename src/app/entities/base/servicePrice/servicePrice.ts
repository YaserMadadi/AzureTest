
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { PriceScope } from '../priceScope';
import { ProviderService } from '../providerService';




export class ServicePrice extends BaseEntity implements IBaseEntity<ServicePrice> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ServicePrice.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'servicePrice', 'Service Price');

  //endregion

  //#region Fields

	public providerService?: ProviderService = new ProviderService();
	
	public priceScope?: PriceScope = new PriceScope();
	
	public note: string = '';
	
	public amount: number = 0;
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(servicePrice: ServicePrice) : boolean {
    let result = 
      Validator.Validate(servicePrice.providerService) &&
		Validator.Validate(servicePrice.priceScope);

    if(result === false)
      console.log('ServicePrice is unvalid : ', servicePrice);

    return result;
  }
}
