
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { ConnectionType } from '../connectionType';
import { Provider } from '../provider';




export class ProviderConnection extends BaseEntity implements IBaseEntity<ProviderConnection> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ProviderConnection.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'providerConnection', 'Provider Connection');

  //endregion

  //#region Fields

	public provider?: Provider = new Provider();
	
	public connectionType?: ConnectionType = new ConnectionType();
	
	public value: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(providerConnection: ProviderConnection) : boolean {
    let result = 
      Validator.Validate(providerConnection.provider) &&
		Validator.Validate(providerConnection.connectionType) &&
		Validator.Validate(providerConnection.value);

    if(result === false)
      console.log('ProviderConnection is unvalid : ', providerConnection);

    return result;
  }
}
