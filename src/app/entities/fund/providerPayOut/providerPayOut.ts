
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Provider } from '../../base/provider';
import { TransactionStatus } from '../transactionStatus';




export class ProviderPayOut extends BaseEntity implements IBaseEntity<ProviderPayOut> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ProviderPayOut.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('fund', 'providerPayOut', 'Provider Pay Out');

  //endregion

  //#region Fields

	public provider?: Provider = new Provider();
	
	public date?: Date = new Date();
	
	public time?: string = '';
	
	public amount: number = 0;
	
	public transactionID: string = '';
	
	public transactionStatus?: TransactionStatus = new TransactionStatus();
	
	public note: string = '';

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(providerPayOut: ProviderPayOut) : boolean {
    let result = 
      Validator.Validate(providerPayOut.provider) &&
		Validator.Validate(providerPayOut.date) &&
		Validator.Validate(providerPayOut.transactionID) &&
		Validator.Validate(providerPayOut.transactionStatus);

    if(result === false)
      console.log('ProviderPayOut is unvalid : ', providerPayOut);

    return result;
  }
}
