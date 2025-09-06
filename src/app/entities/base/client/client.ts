
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { City } from '../city';
import { Gender } from '../gender';
import { VerificationStatus } from '../verificationStatus';
import { UserAccount } from '../userAccount';

import { ClientNotification } from '../clientNotification';
import { ClientReview } from '../clientReview';
import { Pet } from '../pet';
import { PhoneNumberVerification } from '../phoneNumberVerification';
import { ClientWallet } from '../../fund/clientWallet';



export class Client extends BaseEntity implements IBaseEntity<Client> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Client.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'client', 'Client');

  //endregion

  //#region Fields

	public firstName: string = '';
	
	public middleName: string = '';
	
	public lastName: string = '';
	
	public nickName: string = '';
	
	public gender?: Gender = new Gender();
	
	public userAccount?: UserAccount = new UserAccount();
	
	public phoneNumber: string = '';
	
	public phoneVerificationStatus?: VerificationStatus = new VerificationStatus();
	
	public city?: City = new City();
	
	public addressLine: string = '';
	
	public extendedAddressLine: string = '';
	
	public postalCode: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfClientNotification: ClientNotification[] = [];
	
	public listOfClientReview: ClientReview[] = [];
	
	public listOfPet: Pet[] = [];
	
	public listOfPhoneNumberVerification: PhoneNumberVerification[] = [];
	
	public listOfClientWallet: ClientWallet[] = [];

  //#endregion

  public static Validate(client: Client) : boolean {
    let result = 
      Validator.Validate(client.firstName) &&
		Validator.Validate(client.middleName) &&
		Validator.Validate(client.lastName) &&
		Validator.Validate(client.nickName) &&
		Validator.Validate(client.gender) &&
		Validator.Validate(client.userAccount) &&
		Validator.Validate(client.phoneNumber) &&
		Validator.Validate(client.phoneVerificationStatus) &&
		Validator.Validate(client.city) &&
		Validator.Validate(client.addressLine) &&
		Validator.Validate(client.extendedAddressLine) &&
		Validator.Validate(client.postalCode);

    if(result === false)
      console.log('Client is unvalid : ', client);

    return result;
  }
}
