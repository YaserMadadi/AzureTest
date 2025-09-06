
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { ClientWalletTransactionLog } from '../clientWalletTransactionLog';
import { ProviderPayOut } from '../providerPayOut';
import { WalletTopUp } from '../walletTopUp';



export class TransactionStatus extends BaseEntity implements IBaseEntity<TransactionStatus> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = TransactionStatus.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('fund', 'transactionStatus', 'Transaction Status');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfClientWalletTransactionLog: ClientWalletTransactionLog[] = [];
	
	public listOfProviderPayOut: ProviderPayOut[] = [];
	
	public listOfWalletTopUp: WalletTopUp[] = [];

  //#endregion

  public static Validate(transactionStatus: TransactionStatus) : boolean {
    let result = 
      Validator.Validate(transactionStatus.title);

    if(result === false)
      console.log('TransactionStatus is unvalid : ', transactionStatus);

    return result;
  }
}
