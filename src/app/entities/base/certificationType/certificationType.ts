
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { Certification } from '../certification';



export class CertificationType extends BaseEntity implements IBaseEntity<CertificationType> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = CertificationType.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'certificationType', 'Certification Type');

  //endregion

  //#region Fields

	public title: string = '';
	
	public note: string = '';
	
	public isIndividual?: boolean = false;
	
	public isEnterprise?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfCertification: Certification[] = [];

  //#endregion

  public static Validate(certificationType: CertificationType) : boolean {
    let result = 
      Validator.Validate(certificationType.title);

    if(result === false)
      console.log('CertificationType is unvalid : ', certificationType);

    return result;
  }
}
