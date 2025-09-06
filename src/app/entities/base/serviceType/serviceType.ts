
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { ProviderService } from '../providerService';



export class ServiceType extends BaseEntity implements IBaseEntity<ServiceType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ServiceType.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'serviceType', 'Service Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfProviderService: ProviderService[] = [];

  //#endregion

  public static Validate(serviceType: ServiceType) : boolean {
    let result = 
      Validator.Validate(serviceType.title);

    if(result === false)
      console.log('ServiceType is unvalid : ', serviceType);

    return result;
  }
}
