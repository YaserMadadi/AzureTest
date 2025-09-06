
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { Certification } from '../certification';



export class CertIssuingOrganization extends BaseEntity implements IBaseEntity<CertIssuingOrganization> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CertIssuingOrganization.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'certIssuingOrganization', 'Cert Issuing Organization');

  //endregion

  //#region Fields

	public title: string = '';
	
	public note: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfCertification: Certification[] = [];

  //#endregion

  public static Validate(certIssuingOrganization: CertIssuingOrganization) : boolean {
    let result = 
      Validator.Validate(certIssuingOrganization.title);

    if(result === false)
      console.log('CertIssuingOrganization is unvalid : ', certIssuingOrganization);

    return result;
  }
}
