
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { ClientWalletTransactionLog } from '../clientWalletTransactionLog';



export class TransactionType extends BaseEntity implements IBaseEntity<TransactionType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = TransactionType.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('fund', 'transactionType', 'Transaction Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfClientWalletTransactionLog: ClientWalletTransactionLog[] = [];

  //#endregion

  public static Validate(transactionType: TransactionType) : boolean {
    let result = 
      Validator.Validate(transactionType.title);

    if(result === false)
      console.log('TransactionType is unvalid : ', transactionType);

    return result;
  }
}
