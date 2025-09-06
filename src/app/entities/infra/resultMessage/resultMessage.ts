
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { MessageType } from '../messageType';




export class ResultMessage extends BaseEntity implements IBaseEntity<ResultMessage> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ResultMessage.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('infra', 'resultMessage', 'Result Message');

  //endregion

  //#region Fields

	public code: number = 0;
	
	public title: string = '';
	
	public messageBody: string = '';
	
	public messageType?: MessageType = new MessageType();

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(resultMessage: ResultMessage) : boolean {
    let result = 
      Validator.Validate(resultMessage.title) &&
		Validator.Validate(resultMessage.messageBody) &&
		Validator.Validate(resultMessage.messageType);

    if(result === false)
      console.log('ResultMessage is unvalid : ', resultMessage);

    return result;
  }
}
