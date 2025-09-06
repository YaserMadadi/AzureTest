
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { BookingStatus } from '../bookingStatus';
import { DurationUnit } from '../durationUnit';
import { Pet } from '../pet';
import { Provider } from '../provider';

import { BookingService } from '../bookingService';
import { BookingTransaction } from '../../fund/bookingTransaction';



export class Booking extends BaseEntity implements IBaseEntity<Booking> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Booking.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'booking', 'Booking');

  //endregion

  //#region Fields

	public pet?: Pet = new Pet();
	
	public provider?: Provider = new Provider();
	
	public startDate?: Date = new Date();
	
	public startTime?: string = '';
	
	public duration: number = 0;
	
	public durationUnit?: DurationUnit = new DurationUnit();
	
	public totalAmount: number = 0;
	
	public bookingStatus?: BookingStatus = new BookingStatus();
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfBookingService: BookingService[] = [];
	
	public listOfBookingTransaction: BookingTransaction[] = [];

  //#endregion

  public static Validate(booking: Booking) : boolean {
    let result = 
      Validator.Validate(booking.pet) &&
		Validator.Validate(booking.provider) &&
		Validator.Validate(booking.startDate) &&
		Validator.Validate(booking.durationUnit) &&
		Validator.Validate(booking.bookingStatus);

    if(result === false)
      console.log('Booking is unvalid : ', booking);

    return result;
  }
}
