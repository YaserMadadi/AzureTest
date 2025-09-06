
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';





export class RecordLog extends BaseEntity implements IBaseEntity<RecordLog> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = RecordLog.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('infra', 'recordLog', 'Record Log');

  //endregion

  //#region Fields

	public entityName: string = '';
	
	public recordID: number = 0;
	
	public user_Id: number = 0;
	
	public effectDate?: Date = new Date();
	
	public oldValue: string = '';
	
	public newValue: string = '';
	
	public actionMode: string = '';

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(recordLog: RecordLog) : boolean {
    let result = 
      Validator.Validate(recordLog.entityName) &&
		Validator.Validate(recordLog.oldValue) &&
		Validator.Validate(recordLog.newValue) &&
		Validator.Validate(recordLog.actionMode);

    if(result === false)
      console.log('RecordLog is unvalid : ', recordLog);

    return result;
  }
}
