
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Bank } from '../bank';
import { Provider } from '../provider';




export class ProviderBankAccount extends BaseEntity implements IBaseEntity<ProviderBankAccount> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ProviderBankAccount.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'providerBankAccount', 'Provider Bank Account');

  //endregion

  //#region Fields

	public provider?: Provider = new Provider();
	
	public bank?: Bank = new Bank();
	
	public institutionNumber: number = 0;
	
	public accountNumber: number = 0;
	
	public accountHolderName: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(providerBankAccount: ProviderBankAccount) : boolean {
    let result = 
      Validator.Validate(providerBankAccount.provider) &&
		Validator.Validate(providerBankAccount.bank) &&
		Validator.Validate(providerBankAccount.accountHolderName);

    if(result === false)
      console.log('ProviderBankAccount is unvalid : ', providerBankAccount);

    return result;
  }
}
