
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Booking } from '../../base/booking';
import { ClientWallet } from '../clientWallet';
import { ProviderWallet } from '../providerWallet';




export class BookingTransaction extends BaseEntity implements IBaseEntity<BookingTransaction> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = BookingTransaction.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('fund', 'bookingTransaction', 'Booking Transaction');

  //endregion

  //#region Fields

	public booking?: Booking = new Booking();
	
	public clientWallet?: ClientWallet = new ClientWallet();
	
	public providerWallet?: ProviderWallet = new ProviderWallet();
	
	public amount: number = 0;
	
	public date?: Date = new Date();
	
	public time?: string = '';
	
	public paymentNote: string = '';
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(bookingTransaction: BookingTransaction) : boolean {
    let result = 
      Validator.Validate(bookingTransaction.booking) &&
		Validator.Validate(bookingTransaction.clientWallet) &&
		Validator.Validate(bookingTransaction.providerWallet) &&
		Validator.Validate(bookingTransaction.date) &&
		Validator.Validate(bookingTransaction.paymentNote);

    if(result === false)
      console.log('BookingTransaction is unvalid : ', bookingTransaction);

    return result;
  }
}
