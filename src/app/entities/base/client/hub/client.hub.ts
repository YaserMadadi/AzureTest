

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Client, Client_Service } from '..';
import { ClientEditUI } from '../edit/client.edit'
import { ClientDeleteUI } from '../delete/client.delete'
import { City } from '../../city';
import { Gender } from '../../gender';
import { VerificationStatus } from '../../verificationStatus';
import { UserAccount } from '../../userAccount';
import { ClientNotification } from '../../clientNotification';
import { ClientNotificationEditUI } from '../../clientNotification/edit/clientNotification.edit';
import { ClientReview } from '../../clientReview';
import { ClientReviewEditUI } from '../../clientReview/edit/clientReview.edit';
import { Pet } from '../../pet';
import { PetEditUI } from '../../pet/edit/pet.edit';
import { PhoneNumberVerification } from '../../phoneNumberVerification';
import { PhoneNumberVerificationEditUI } from '../../phoneNumberVerification/edit/phoneNumberVerification.edit';
import { ClientWallet } from '../../../fund/clientWallet';
import { ClientWalletEditUI } from '../../../fund/clientWallet/edit/clientWallet.edit';



@Component({
  selector: 'base-client-index',
  templateUrl: './client.hub.html',
  styleUrls: ['./client.hub.scss'],
  providers: [Client_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ClientEditUI,
    ClientDeleteUI,
    LookupComponent,
		ClientNotificationEditUI,
		ClientReviewEditUI,
		PetEditUI,
		PhoneNumberVerificationEditUI,
		ClientWalletEditUI,
  ]
})
export class ClientHubUI extends HubUI<Client> implements IHubUI<Client> {

  constructor(public override service: Client_Service = inject(Client_Service)) {
    super(service);
    this.cityLinker = new ForeignkeyLinker<City>(this.service.cityService, true);
		this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, true);
		this.phoneVerificationStatusLinker = new ForeignkeyLinker<VerificationStatus>(this.service.verificationStatusService, true);
		this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Client Notification', () => this.onAddClientNotification()),
			new DropdownMenuItem('Add  Client Review', () => this.onAddClientReview()),
			new DropdownMenuItem('Add  Pet', () => this.onAddPet()),
			new DropdownMenuItem('Add  Phone Number Verification', () => this.onAddPhoneNumberVerification()),
			new DropdownMenuItem('Add  Client Wallet', () => this.onAddClientWallet()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  City', () => this.navigateToUrl('/base/city')),
			new DropdownMenuItem('Manage  Gender', () => this.navigateToUrl('/base/gender')),
			new DropdownMenuItem('Manage  Verification Status', () => this.navigateToUrl('/base/verificationStatus')),
			new DropdownMenuItem('Manage  User Account', () => this.navigateToUrl('/base/userAccount')),
		];
  }

  public cityLinker: ForeignkeyLinker<City>;

	public genderLinker: ForeignkeyLinker<Gender>;

	public phoneVerificationStatusLinker: ForeignkeyLinker<VerificationStatus>;

	public userAccountLinker: ForeignkeyLinker<UserAccount>;

  
  @ViewChild('clientNotificationEditUI')
  public clientNotificationEditUI!: ClientNotificationEditUI;

  onAddClientNotification() {
    let clientNotification = new ClientNotification();
    clientNotification.client = this.currentInstance;
    this.clientNotificationEditUI.Show(clientNotification);
  }


	
  @ViewChild('clientReviewEditUI')
  public clientReviewEditUI!: ClientReviewEditUI;

  onAddClientReview() {
    let clientReview = new ClientReview();
    clientReview.client = this.currentInstance;
    this.clientReviewEditUI.Show(clientReview);
  }


	
  @ViewChild('petEditUI')
  public petEditUI!: PetEditUI;

  onAddPet() {
    let pet = new Pet();
    pet.client = this.currentInstance;
    this.petEditUI.Show(pet);
  }


	
  @ViewChild('phoneNumberVerificationEditUI')
  public phoneNumberVerificationEditUI!: PhoneNumberVerificationEditUI;

  onAddPhoneNumberVerification() {
    let phoneNumberVerification = new PhoneNumberVerification();
    phoneNumberVerification.client = this.currentInstance;
    this.phoneNumberVerificationEditUI.Show(phoneNumberVerification);
  }


	
  @ViewChild('clientWalletEditUI')
  public clientWalletEditUI!: ClientWalletEditUI;

  onAddClientWallet() {
    let clientWallet = new ClientWallet();
    clientWallet.client = this.currentInstance;
    this.clientWalletEditUI.Show(clientWallet);
  }


}
