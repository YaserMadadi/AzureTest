
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { ClientWallet } from '../clientWallet';
import { TransactionType } from '../transactionType';
import { TransactionStatus } from '../transactionStatus';




export class ClientWalletTransactionLog extends BaseEntity implements IBaseEntity<ClientWalletTransactionLog> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ClientWalletTransactionLog.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('fund', 'clientWalletTransactionLog', 'Client Wallet Transaction Log');

  //endregion

  //#region Fields

	public clientWallet?: ClientWallet = new ClientWallet();
	
	public transactionType?: TransactionType = new TransactionType();
	
	public amount: number = 0;
	
	public date?: Date = new Date();
	
	public time?: string = '';
	
	public transactionStatus?: TransactionStatus = new TransactionStatus();
	
	public balance: number = 0;
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(clientWalletTransactionLog: ClientWalletTransactionLog) : boolean {
    let result = 
      Validator.Validate(clientWalletTransactionLog.clientWallet) &&
		Validator.Validate(clientWalletTransactionLog.transactionType) &&
		Validator.Validate(clientWalletTransactionLog.date) &&
		Validator.Validate(clientWalletTransactionLog.transactionStatus);

    if(result === false)
      console.log('ClientWalletTransactionLog is unvalid : ', clientWalletTransactionLog);

    return result;
  }
}
