
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Provider } from '../../base/provider';

import { BookingTransaction } from '../bookingTransaction';



export class ProviderWallet extends BaseEntity implements IBaseEntity<ProviderWallet> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ProviderWallet.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('fund', 'providerWallet', 'Provider Wallet');

  //endregion

  //#region Fields

	public provider?: Provider = new Provider();
	
	public balance: number = 0;
	
	public note: string = '';

	//#endregion
    
  //#region Collection Properties

  public listOfBookingTransaction: BookingTransaction[] = [];

  //#endregion

  public static Validate(providerWallet: ProviderWallet) : boolean {
    let result = 
      Validator.Validate(providerWallet.provider);

    if(result === false)
      console.log('ProviderWallet is unvalid : ', providerWallet);

    return result;
  }
}
