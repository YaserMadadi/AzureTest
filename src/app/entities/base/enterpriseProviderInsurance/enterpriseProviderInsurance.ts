
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { EnterpriseProvider } from '../enterpriseProvider';




export class EnterpriseProviderInsurance extends BaseEntity implements IBaseEntity<EnterpriseProviderInsurance> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = EnterpriseProviderInsurance.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'enterpriseProviderInsurance', 'Enterprise Provider Insurance');

  //endregion

  //#region Fields

	public enterpriseProvider?: EnterpriseProvider = new EnterpriseProvider();
	
	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(enterpriseProviderInsurance: EnterpriseProviderInsurance) : boolean {
    let result = 
      Validator.Validate(enterpriseProviderInsurance.enterpriseProvider) &&
		Validator.Validate(enterpriseProviderInsurance.title);

    if(result === false)
      console.log('EnterpriseProviderInsurance is unvalid : ', enterpriseProviderInsurance);

    return result;
  }
}
