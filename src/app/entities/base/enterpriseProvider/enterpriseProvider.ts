
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Provider } from '../provider';

import { EnterpriseProviderInsurance } from '../enterpriseProviderInsurance';



export class EnterpriseProvider extends Provider implements IBaseEntity<EnterpriseProvider> {

  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = EnterpriseProvider.Info) {
    super(id, descriptor, info);

  }



  //region Info

  public static override readonly Info: Info = new Info('base', 'enterpriseProvider', 'Enterprise Provider');

  //endregion

  //#region Fields

  public title: string = '';

  public businessNumber: string = '';

  //#endregion

  //#region Collection Properties

  public listOfEnterpriseProviderInsurance: EnterpriseProviderInsurance[] = [];

  //#endregion

  public static override Validate(enterpriseProvider: EnterpriseProvider): boolean {
    let result =
      Provider.Validate(enterpriseProvider) &&
      Validator.Validate(enterpriseProvider.title) &&
      Validator.Validate(enterpriseProvider.businessNumber);

    if (result === false)
      console.log('EnterpriseProvider is unvalid : ', enterpriseProvider);

    return result;
  }
}
