
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { UserAccount } from '../userAccount';
import { VerificationStatus } from '../verificationStatus';




export class EmailVerification extends BaseEntity implements IBaseEntity<EmailVerification> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = EmailVerification.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'emailVerification', 'Email Verification');

  //endregion

  //#region Fields

	public userAccount?: UserAccount = new UserAccount();
	
	public verificationCode: string = '';
	
	public generateTime?: Date = new Date();
	
	public expiryDate?: Date = new Date();
	
	public verificationStatus?: VerificationStatus = new VerificationStatus();

	//#endregion
    
  //#region Collection Properties

  // No Item...

  //#endregion

  public static Validate(emailVerification: EmailVerification) : boolean {
    let result = 
      Validator.Validate(emailVerification.userAccount) &&
		Validator.Validate(emailVerification.verificationCode) &&
		Validator.Validate(emailVerification.verificationStatus);

    if(result === false)
      console.log('EmailVerification is unvalid : ', emailVerification);

    return result;
  }
}
