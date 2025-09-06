
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { ResultMessage } from '../resultMessage';



export class MessageType extends BaseEntity implements IBaseEntity<MessageType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = MessageType.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('infra', 'messageType', 'Message Type');

  //endregion

  //#region Fields

	public title: string = '';

	//#endregion
    
  //#region Collection Properties

  public listOfResultMessage: ResultMessage[] = [];

  //#endregion

  public static Validate(messageType: MessageType) : boolean {
    let result = 
      Validator.Validate(messageType.title);

    if(result === false)
      console.log('MessageType is unvalid : ', messageType);

    return result;
  }
}
