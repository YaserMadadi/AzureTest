
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';





export class ExceptionProcedure extends BaseEntity implements IBaseEntity<ExceptionProcedure> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ExceptionProcedure.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('infra', 'exceptionProcedure', 'Exception Procedure');

  //endregion

  //#region Fields

	public schema: string = '';
	
	public procedureName: string = '';
	
	public lineNumber: number = 0;
	
	public parameter: string = '';
	
	public userAccount_Id: number = 0;
	
	public date?: Date = new Date();
	
	public time?: string = '';
	
	public errorNumber: number = 0;
	
	public errorMessage: string = '';
	
	public errorStatus: number = 0;
	
	public isChecked?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(exceptionProcedure: ExceptionProcedure) : boolean {
    let result = 
      Validator.Validate(exceptionProcedure.schema) &&
		Validator.Validate(exceptionProcedure.procedureName) &&
		Validator.Validate(exceptionProcedure.parameter) &&
		Validator.Validate(exceptionProcedure.date) &&
		Validator.Validate(exceptionProcedure.errorMessage);

    if(result === false)
      console.log('ExceptionProcedure is unvalid : ', exceptionProcedure);

    return result;
  }
}
