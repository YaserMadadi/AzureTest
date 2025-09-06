
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { Client } from '../client';
import { EmailVerification } from '../emailVerification';
import { PhoneNumberVerification } from '../phoneNumberVerification';



export class VerificationStatus extends BaseEntity implements IBaseEntity<VerificationStatus> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = VerificationStatus.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'verificationStatus', 'Verification Status');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;
	
	public isVerified?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfClient_VerificationStatus: Client[] = [];
	
	public listOfEmailVerification: EmailVerification[] = [];
	
	public listOfPhoneNumberVerification: PhoneNumberVerification[] = [];

  //#endregion

  public static Validate(verificationStatus: VerificationStatus) : boolean {
    let result = 
      Validator.Validate(verificationStatus.title);

    if(result === false)
      console.log('VerificationStatus is unvalid : ', verificationStatus);

    return result;
  }
}
