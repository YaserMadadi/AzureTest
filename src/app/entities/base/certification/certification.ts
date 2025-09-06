
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { CertificationType } from '../certificationType';
import { CertIssuingOrganization } from '../certIssuingOrganization';

import { ProviderCertification } from '../providerCertification';



export class Certification extends BaseEntity implements IBaseEntity<Certification> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Certification.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'certification', 'Certification');

  //endregion

  //#region Fields

	public certificationType?: CertificationType = new CertificationType();
	
	public certIssuingOrganization?: CertIssuingOrganization = new CertIssuingOrganization();
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfProviderCertification: ProviderCertification[] = [];

  //#endregion

  public static Validate(certification: Certification) : boolean {
    let result = 
      Validator.Validate(certification.certificationType) &&
		Validator.Validate(certification.certIssuingOrganization);

    if(result === false)
      console.log('Certification is unvalid : ', certification);

    return result;
  }
}
