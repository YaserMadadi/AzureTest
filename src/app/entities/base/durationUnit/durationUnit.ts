
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { Booking } from '../booking';



export class DurationUnit extends BaseEntity implements IBaseEntity<DurationUnit> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = DurationUnit.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'durationUnit', 'Duration Unit');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfBooking: Booking[] = [];

  //#endregion

  public static Validate(durationUnit: DurationUnit) : boolean {
    let result = 
      Validator.Validate(durationUnit.title);

    if(result === false)
      console.log('DurationUnit is unvalid : ', durationUnit);

    return result;
  }
}
