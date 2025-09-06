
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Booking } from '../booking';
import { ProviderService } from '../providerService';




export class BookingService extends BaseEntity implements IBaseEntity<BookingService> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = BookingService.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'bookingService', 'Booking Service');

  //endregion

  //#region Fields

	public booking?: Booking = new Booking();
	
	public providerService?: ProviderService = new ProviderService();
	
	public amount: number = 0;
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(bookingService: BookingService) : boolean {
    let result = 
      Validator.Validate(bookingService.booking) &&
		Validator.Validate(bookingService.providerService);

    if(result === false)
      console.log('BookingService is unvalid : ', bookingService);

    return result;
  }
}
