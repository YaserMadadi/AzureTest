

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { IndividualProvider, IndividualProvider_Service } from '..';
import { IndividualProviderEditUI } from '../edit/individualProvider.edit'
import { IndividualProviderDeleteUI } from '../delete/individualProvider.delete'
import { BackgroundCheckStatus } from '../../backgroundCheckStatus';
import { Gender } from '../../gender';
import { ProviderType } from '../../providerType/providerType';
import { UserAccount } from '../../userAccount/userAccount';
import { AcceptedPetCategory } from '../../acceptedPetCategory';
import { AcceptedPetCategoryEditUI } from '../../acceptedPetCategory/edit/acceptedPetCategory.edit';
import { Booking } from '../../booking';
import { BookingEditUI } from '../../booking/edit/booking.edit';
import { ClientReview } from '../../clientReview';
import { ClientReviewEditUI } from '../../clientReview/edit/clientReview.edit';
import { LocationCoverage } from '../../locationCoverage';
import { LocationCoverageEditUI } from '../../locationCoverage/edit/locationCoverage.edit';
import { ProviderBankAccount } from '../../providerBankAccount';
import { ProviderBankAccountEditUI } from '../../providerBankAccount/edit/providerBankAccount.edit';
import { ProviderCertification } from '../../providerCertification';
import { ProviderCertificationEditUI } from '../../providerCertification/edit/providerCertification.edit';
import { ProviderConnection } from '../../providerConnection';
import { ProviderConnectionEditUI } from '../../providerConnection/edit/providerConnection.edit';
import { ProviderService } from '../../providerService';
import { ProviderServiceEditUI } from '../../providerService/edit/providerService.edit';
import { WorkTime } from '../../workTime';
import { WorkTimeEditUI } from '../../workTime/edit/workTime.edit';
import { ProviderPayOut } from '../../../fund/providerPayOut';
import { ProviderPayOutEditUI } from '../../../fund/providerPayOut/edit/providerPayOut.edit';
import { ProviderWallet } from '../../../fund/providerWallet';
import { ProviderWalletEditUI } from '../../../fund/providerWallet/edit/providerWallet.edit';



@Component({
  selector: 'base-individualProvider-index',
  templateUrl: './individualProvider.hub.html',
  styleUrls: ['./individualProvider.hub.scss'],
  providers: [IndividualProvider_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    IndividualProviderEditUI,
    IndividualProviderDeleteUI,
    LookupComponent,
  ]
})
export class IndividualProviderHubUI extends HubUI<IndividualProvider> implements IHubUI<IndividualProvider> {

  constructor(public override service: IndividualProvider_Service = inject(IndividualProvider_Service)) {
    super(service);
    this.providerTypeLinker = new ForeignkeyLinker<ProviderType>(this.service.providerTypeService, true);
		this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);
		this.backgroundCheckStatusLinker = new ForeignkeyLinker<BackgroundCheckStatus>(this.service.backgroundCheckStatusService, true);
		this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Accepted Pet Category', () => this.onAddAcceptedPetCategory()),
			new DropdownMenuItem('Add  Booking', () => this.onAddBooking()),
			new DropdownMenuItem('Add  Client Review', () => this.onAddClientReview()),
			new DropdownMenuItem('Add  Location Coverage', () => this.onAddLocationCoverage()),
			new DropdownMenuItem('Add  Provider Bank Account', () => this.onAddProviderBankAccount()),
			new DropdownMenuItem('Add  Provider Certification', () => this.onAddProviderCertification()),
			new DropdownMenuItem('Add  Provider Connection', () => this.onAddProviderConnection()),
			new DropdownMenuItem('Add  Provider Service', () => this.onAddProviderService()),
			new DropdownMenuItem('Add  Work Time', () => this.onAddWorkTime()),
			new DropdownMenuItem('Add  Provider Pay Out', () => this.onAddProviderPayOut()),
			new DropdownMenuItem('Add  Provider Wallet', () => this.onAddProviderWallet()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Provider Type', () => this.navigateToUrl('/base/providerType')),
			new DropdownMenuItem('Manage  User Account', () => this.navigateToUrl('/base/userAccount')),
			new DropdownMenuItem('Manage  Background Check Status', () => this.navigateToUrl('/base/backgroundCheckStatus')),
			new DropdownMenuItem('Manage  Gender', () => this.navigateToUrl('/base/gender')),
		];
  }

  public providerTypeLinker: ForeignkeyLinker<ProviderType>;

	public userAccountLinker: ForeignkeyLinker<UserAccount>;

	public backgroundCheckStatusLinker: ForeignkeyLinker<BackgroundCheckStatus>;

	public genderLinker: ForeignkeyLinker<Gender>;

  
  @ViewChild('acceptedPetCategoryEditUI')
  public acceptedPetCategoryEditUI!: AcceptedPetCategoryEditUI;

  onAddAcceptedPetCategory() {
    let acceptedPetCategory = new AcceptedPetCategory();
    acceptedPetCategory.provider = this.currentInstance;
    this.acceptedPetCategoryEditUI.Show(acceptedPetCategory);
  }


	
  @ViewChild('bookingEditUI')
  public bookingEditUI!: BookingEditUI;

  onAddBooking() {
    let booking = new Booking();
    booking.provider = this.currentInstance;
    this.bookingEditUI.Show(booking);
  }


	
  @ViewChild('clientReviewEditUI')
  public clientReviewEditUI!: ClientReviewEditUI;

  onAddClientReview() {
    let clientReview = new ClientReview();
    clientReview.provider = this.currentInstance;
    this.clientReviewEditUI.Show(clientReview);
  }


	
  @ViewChild('locationCoverageEditUI')
  public locationCoverageEditUI!: LocationCoverageEditUI;

  onAddLocationCoverage() {
    let locationCoverage = new LocationCoverage();
    locationCoverage.provider = this.currentInstance;
    this.locationCoverageEditUI.Show(locationCoverage);
  }


	
  @ViewChild('providerBankAccountEditUI')
  public providerBankAccountEditUI!: ProviderBankAccountEditUI;

  onAddProviderBankAccount() {
    let providerBankAccount = new ProviderBankAccount();
    providerBankAccount.provider = this.currentInstance;
    this.providerBankAccountEditUI.Show(providerBankAccount);
  }


	
  @ViewChild('providerCertificationEditUI')
  public providerCertificationEditUI!: ProviderCertificationEditUI;

  onAddProviderCertification() {
    let providerCertification = new ProviderCertification();
    providerCertification.provider = this.currentInstance;
    this.providerCertificationEditUI.Show(providerCertification);
  }


	
  @ViewChild('providerConnectionEditUI')
  public providerConnectionEditUI!: ProviderConnectionEditUI;

  onAddProviderConnection() {
    let providerConnection = new ProviderConnection();
    providerConnection.provider = this.currentInstance;
    this.providerConnectionEditUI.Show(providerConnection);
  }


	
  @ViewChild('providerServiceEditUI')
  public providerServiceEditUI!: ProviderServiceEditUI;

  onAddProviderService() {
    let providerService = new ProviderService();
    providerService.provider = this.currentInstance;
    this.providerServiceEditUI.Show(providerService);
  }


	
  @ViewChild('workTimeEditUI')
  public workTimeEditUI!: WorkTimeEditUI;

  onAddWorkTime() {
    let workTime = new WorkTime();
    workTime.provider = this.currentInstance;
    this.workTimeEditUI.Show(workTime);
  }


	
  @ViewChild('providerPayOutEditUI')
  public providerPayOutEditUI!: ProviderPayOutEditUI;

  onAddProviderPayOut() {
    let providerPayOut = new ProviderPayOut();
    providerPayOut.provider = this.currentInstance;
    this.providerPayOutEditUI.Show(providerPayOut);
  }


	
  @ViewChild('providerWalletEditUI')
  public providerWalletEditUI!: ProviderWalletEditUI;

  onAddProviderWallet() {
    let providerWallet = new ProviderWallet();
    providerWallet.provider = this.currentInstance;
    this.providerWalletEditUI.Show(providerWallet);
  }


}
