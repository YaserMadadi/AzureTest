
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Client } from '../client';
import { VerificationStatus } from '../verificationStatus';




export class PhoneNumberVerification extends BaseEntity implements IBaseEntity<PhoneNumberVerification> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PhoneNumberVerification.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'phoneNumberVerification', 'Phone Number Verification');

  //endregion

  //#region Fields

	public client?: Client = new Client();
	
	public verificationCode: string = '';
	
	public generateTime?: Date = new Date();
	
	public expiryDate?: Date = new Date();
	
	public verificationStatus?: VerificationStatus = new VerificationStatus();

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(phoneNumberVerification: PhoneNumberVerification) : boolean {
    let result = 
      Validator.Validate(phoneNumberVerification.client) &&
		Validator.Validate(phoneNumberVerification.verificationCode) &&
		Validator.Validate(phoneNumberVerification.verificationStatus);

    if(result === false)
      console.log('PhoneNumberVerification is unvalid : ', phoneNumberVerification);

    return result;
  }
}
