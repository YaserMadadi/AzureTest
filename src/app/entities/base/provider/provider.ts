
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { ProviderType } from '../providerType';
import { UserAccount } from '../userAccount';

import { AcceptedPetCategory } from '../acceptedPetCategory';
import { Booking } from '../booking';
import { ClientReview } from '../clientReview';
import { EnterpriseProvider } from '../enterpriseProvider';
import { IndividualProvider } from '../individualProvider';
import { LocationCoverage } from '../locationCoverage';
import { ProviderBankAccount } from '../providerBankAccount';
import { ProviderCertification } from '../providerCertification';
import { ProviderConnection } from '../providerConnection';
import { ProviderService } from '../providerService';
import { WorkTime } from '../workTime';
import { ProviderPayOut } from '../../fund/providerPayOut';
import { ProviderWallet } from '../../fund/providerWallet';



export class Provider extends BaseEntity implements IBaseEntity<Provider> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Provider.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'provider', 'Provider');

  //endregion

  //#region Fields

	public providerType?: ProviderType = new ProviderType();
	
	public userAccount?: UserAccount = new UserAccount();
	
	public name: string = '';
	
	public profilePicture: string = '';
	
	public isVerified?: boolean = false;
	
	public reviewCount: number = 0;
	
	public rate: number = 0;
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfAcceptedPetCategory: AcceptedPetCategory[] = [];
	
	public listOfBooking: Booking[] = [];
	
	public listOfClientReview: ClientReview[] = [];
	
	public listOfLocationCoverage: LocationCoverage[] = [];
	
	public listOfProviderBankAccount: ProviderBankAccount[] = [];
	
	public listOfProviderCertification: ProviderCertification[] = [];
	
	public listOfProviderConnection: ProviderConnection[] = [];
	
	public listOfProviderService: ProviderService[] = [];
	
	public listOfWorkTime: WorkTime[] = [];
	
	public listOfProviderPayOut: ProviderPayOut[] = [];
	
	public listOfProviderWallet: ProviderWallet[] = [];

  //#endregion

  public static Validate(provider: Provider) : boolean {
    let result = 
      Validator.Validate(provider.providerType) &&
		Validator.Validate(provider.userAccount) &&
		Validator.Validate(provider.name) &&
		Validator.Validate(provider.profilePicture);

    if(result === false)
      console.log('Provider is unvalid : ', provider);

    return result;
  }
}
