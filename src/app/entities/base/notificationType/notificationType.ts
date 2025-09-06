
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { ClientNotification } from '../clientNotification';



export class NotificationType extends BaseEntity implements IBaseEntity<NotificationType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = NotificationType.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'notificationType', 'Notification Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfClientNotification: ClientNotification[] = [];

  //#endregion

  public static Validate(notificationType: NotificationType) : boolean {
    let result = 
      Validator.Validate(notificationType.title);

    if(result === false)
      console.log('NotificationType is unvalid : ', notificationType);

    return result;
  }
}
