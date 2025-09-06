
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Client } from '../../base/client';

import { BookingTransaction } from '../bookingTransaction';
import { ClientWalletTransactionLog } from '../clientWalletTransactionLog';
import { WalletTopUp } from '../walletTopUp';



export class ClientWallet extends BaseEntity implements IBaseEntity<ClientWallet> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ClientWallet.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('fund', 'clientWallet', 'Client Wallet');

  //endregion

  //#region Fields

	public client?: Client = new Client();
	
	public balance: number = 0;
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfBookingTransaction: BookingTransaction[] = [];
	
	public listOfClientWalletTransactionLog: ClientWalletTransactionLog[] = [];
	
	public listOfWalletTopUp: WalletTopUp[] = [];

  //#endregion

  public static Validate(clientWallet: ClientWallet) : boolean {
    let result = 
      Validator.Validate(clientWallet.client);

    if(result === false)
      console.log('ClientWallet is unvalid : ', clientWallet);

    return result;
  }
}
