
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { ProviderConnection } from '../providerConnection';



export class ConnectionType extends BaseEntity implements IBaseEntity<ConnectionType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ConnectionType.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'connectionType', 'Connection Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfProviderConnection: ProviderConnection[] = [];

  //#endregion

  public static Validate(connectionType: ConnectionType) : boolean {
    let result = 
      Validator.Validate(connectionType.title);

    if(result === false)
      console.log('ConnectionType is unvalid : ', connectionType);

    return result;
  }
}
