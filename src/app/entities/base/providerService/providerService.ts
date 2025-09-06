
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Provider } from '../provider';
import { ServiceType } from '../serviceType';

import { BookingService } from '../bookingService';
import { ServiceOrientedWorkTime } from '../serviceOrientedWorkTime';
import { ServicePrice } from '../servicePrice';



export class ProviderService extends BaseEntity implements IBaseEntity<ProviderService> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ProviderService.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'providerService', 'Provider Service');

  //endregion

  //#region Fields

	public provider?: Provider = new Provider();
	
	public serviceType?: ServiceType = new ServiceType();
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfBookingService: BookingService[] = [];
	
	public listOfServiceOrientedWorkTime: ServiceOrientedWorkTime[] = [];
	
	public listOfServicePrice: ServicePrice[] = [];

  //#endregion

  public static Validate(providerService: ProviderService) : boolean {
    let result = 
      Validator.Validate(providerService.provider) &&
		Validator.Validate(providerService.serviceType);

    if(result === false)
      console.log('ProviderService is unvalid : ', providerService);

    return result;
  }
}
