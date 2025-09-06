
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { Booking } from '../booking';



export class BookingStatus extends BaseEntity implements IBaseEntity<BookingStatus> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = BookingStatus.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'bookingStatus', 'Booking Status');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfBooking: Booking[] = [];

  //#endregion

  public static Validate(bookingStatus: BookingStatus) : boolean {
    let result = 
      Validator.Validate(bookingStatus.title);

    if(result === false)
      console.log('BookingStatus is unvalid : ', bookingStatus);

    return result;
  }
}
