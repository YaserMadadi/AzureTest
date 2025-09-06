
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { ProviderService } from '../providerService';
import { WeekDay } from '../weekDay';




export class ServiceOrientedWorkTime extends BaseEntity implements IBaseEntity<ServiceOrientedWorkTime> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ServiceOrientedWorkTime.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'serviceOrientedWorkTime', 'Service Oriented Work Time');

  //endregion

  //#region Fields

	public providerService?: ProviderService = new ProviderService();
	
	public weekDay?: WeekDay = new WeekDay();
	
	public from?: string = '';
	
	public to?: string = '';
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(serviceOrientedWorkTime: ServiceOrientedWorkTime) : boolean {
    let result = 
      Validator.Validate(serviceOrientedWorkTime.providerService) &&
		Validator.Validate(serviceOrientedWorkTime.weekDay);

    if(result === false)
      console.log('ServiceOrientedWorkTime is unvalid : ', serviceOrientedWorkTime);

    return result;
  }
}
