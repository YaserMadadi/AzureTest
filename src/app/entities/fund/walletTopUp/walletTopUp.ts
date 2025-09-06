
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { ClientWallet } from '../clientWallet';
import { PaymentMethod } from '../paymentMethod';
import { TransactionStatus } from '../transactionStatus';




export class WalletTopUp extends BaseEntity implements IBaseEntity<WalletTopUp> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = WalletTopUp.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('fund', 'walletTopUp', 'Wallet Top Up');

  //endregion

  //#region Fields

	public clientWallet?: ClientWallet = new ClientWallet();
	
	public amount: number = 0;
	
	public date?: Date = new Date();
	
	public time?: string = '';
	
	public paymentMethod?: PaymentMethod = new PaymentMethod();
	
	public transactionID: string = '';
	
	public transactionStatus?: TransactionStatus = new TransactionStatus();
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(walletTopUp: WalletTopUp) : boolean {
    let result = 
      Validator.Validate(walletTopUp.clientWallet) &&
		Validator.Validate(walletTopUp.date) &&
		Validator.Validate(walletTopUp.paymentMethod) &&
		Validator.Validate(walletTopUp.transactionID) &&
		Validator.Validate(walletTopUp.transactionStatus);

    if(result === false)
      console.log('WalletTopUp is unvalid : ', walletTopUp);

    return result;
  }
}
