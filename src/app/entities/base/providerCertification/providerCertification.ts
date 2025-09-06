
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Certification } from '../certification';
import { Provider } from '../provider';




export class ProviderCertification extends BaseEntity implements IBaseEntity<ProviderCertification> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = ProviderCertification.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'providerCertification', 'Provider Certification');

  //endregion

  //#region Fields

	public provider?: Provider = new Provider();
	
	public certification?: Certification = new Certification();
	
	public dateIssued?: Date = new Date();
	
	public expiryDate?: Date = new Date();
	
	public documentUrl: string = '';
	
	public isApproved?: boolean = false;
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(providerCertification: ProviderCertification) : boolean {
    let result = 
      Validator.Validate(providerCertification.provider) &&
		Validator.Validate(providerCertification.certification) &&
		Validator.Validate(providerCertification.dateIssued) &&
		Validator.Validate(providerCertification.expiryDate) &&
		Validator.Validate(providerCertification.documentUrl);

    if(result === false)
      console.log('ProviderCertification is unvalid : ', providerCertification);

    return result;
  }
}
