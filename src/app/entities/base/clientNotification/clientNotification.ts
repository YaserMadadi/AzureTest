
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Client } from '../client';
import { NotificationType } from '../notificationType';




export class ClientNotification extends BaseEntity implements IBaseEntity<ClientNotification> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ClientNotification.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'clientNotification', 'Client Notification');

  //endregion

  //#region Fields

	public client?: Client = new Client();
	
	public sentTime?: Date = new Date();
	
	public title: string = '';
	
	public message: string = '';
	
	public notificationType?: NotificationType = new NotificationType();
	
	public isRead?: boolean = false;
	
	public readTime?: Date = new Date();
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(clientNotification: ClientNotification) : boolean {
    let result = 
      Validator.Validate(clientNotification.client) &&
		Validator.Validate(clientNotification.title) &&
		Validator.Validate(clientNotification.message) &&
		Validator.Validate(clientNotification.notificationType);

    if(result === false)
      console.log('ClientNotification is unvalid : ', clientNotification);

    return result;
  }
}
