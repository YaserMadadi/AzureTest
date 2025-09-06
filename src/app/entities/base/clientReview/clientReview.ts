
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Client } from '../client';
import { Provider } from '../provider';




export class ClientReview extends BaseEntity implements IBaseEntity<ClientReview> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ClientReview.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'clientReview', 'Client Review');

  //endregion

  //#region Fields

	public client?: Client = new Client();
	
	public provider?: Provider = new Provider();
	
	public time?: Date = new Date();
	
	public note: string = '';
	
	public rate: number = 0;
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(clientReview: ClientReview) : boolean {
    let result = 
      Validator.Validate(clientReview.client) &&
		Validator.Validate(clientReview.provider);

    if(result === false)
      console.log('ClientReview is unvalid : ', clientReview);

    return result;
  }
}
