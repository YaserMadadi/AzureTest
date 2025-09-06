
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { ProviderBankAccount } from '../providerBankAccount';



export class Bank extends BaseEntity implements IBaseEntity<Bank> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Bank.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'bank', 'Bank');

  //endregion

  //#region Fields

	public title: string = '';
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfProviderBankAccount: ProviderBankAccount[] = [];

  //#endregion

  public static Validate(bank: Bank) : boolean {
    let result = 
      Validator.Validate(bank.title);

    if(result === false)
      console.log('Bank is unvalid : ', bank);

    return result;
  }
}
