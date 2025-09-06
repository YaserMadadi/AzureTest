
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { Provider } from '../provider';



export class ProviderType extends BaseEntity implements IBaseEntity<ProviderType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ProviderType.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'providerType', 'Provider Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfProvider: Provider[] = [];

  //#endregion

  public static Validate(providerType: ProviderType) : boolean {
    let result = 
      Validator.Validate(providerType.title);

    if(result === false)
      console.log('ProviderType is unvalid : ', providerType);

    return result;
  }
}
