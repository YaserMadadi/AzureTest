
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';





export class ExceptionBackend extends BaseEntity implements IBaseEntity<ExceptionBackend> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ExceptionBackend.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('infra', 'exceptionBackend', 'Exception Backend');

  //endregion

  //#region Fields

	public date?: Date = new Date();
	
	public time?: string = '';
	
	public commandName: string = '';
	
	public commandParameters: string = '';
	
	public exceptionType: string = '';
	
	public errorMessage: string = '';
	
	public errorNumber: number = 0;
	
	public errorCode: number = 0;
	
	public exceptionJsonValue: string = '';

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(exceptionBackend: ExceptionBackend) : boolean {
    let result = 
      Validator.Validate(exceptionBackend.date) &&
		Validator.Validate(exceptionBackend.commandName) &&
		Validator.Validate(exceptionBackend.commandParameters) &&
		Validator.Validate(exceptionBackend.exceptionType) &&
		Validator.Validate(exceptionBackend.errorMessage) &&
		Validator.Validate(exceptionBackend.exceptionJsonValue);

    if(result === false)
      console.log('ExceptionBackend is unvalid : ', exceptionBackend);

    return result;
  }
}
