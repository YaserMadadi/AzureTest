
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { ServiceOrientedWorkTime } from '../serviceOrientedWorkTime';
import { WorkTime } from '../workTime';



export class WeekDay extends BaseEntity implements IBaseEntity<WeekDay> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = WeekDay.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'weekDay', 'Week Day');

  //endregion

  //#region Fields

	public title: string = '';

	//#endregion
    
  //#region Collection Properties

  public listOfServiceOrientedWorkTime: ServiceOrientedWorkTime[] = [];
	
	public listOfWorkTime: WorkTime[] = [];

  //#endregion

  public static Validate(weekDay: WeekDay) : boolean {
    let result = 
      Validator.Validate(weekDay.title);

    if(result === false)
      console.log('WeekDay is unvalid : ', weekDay);

    return result;
  }
}
