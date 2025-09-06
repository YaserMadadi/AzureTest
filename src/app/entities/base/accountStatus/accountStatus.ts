
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { UserAccount } from '../userAccount';



export class AccountStatus extends BaseEntity implements IBaseEntity<AccountStatus> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = AccountStatus.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'accountStatus', 'Account Status');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfUserAccount: UserAccount[] = [];

  //#endregion

  public static Validate(accountStatus: AccountStatus) : boolean {
    let result = 
      Validator.Validate(accountStatus.title);

    if(result === false)
      console.log('AccountStatus is unvalid : ', accountStatus);

    return result;
  }
}
