
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Provider } from '../provider';
import { WeekDay } from '../weekDay';




export class WorkTime extends BaseEntity implements IBaseEntity<WorkTime> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = WorkTime.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'workTime', 'Work Time');

  //endregion

  //#region Fields

	public provider?: Provider = new Provider();
	
	public weekDay?: WeekDay = new WeekDay();
	
	public from?: string = '';
	
	public to?: string = '';
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(workTime: WorkTime) : boolean {
    let result = 
      Validator.Validate(workTime.provider) &&
		Validator.Validate(workTime.weekDay);

    if(result === false)
      console.log('WorkTime is unvalid : ', workTime);

    return result;
  }
}
