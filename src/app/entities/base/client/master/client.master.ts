import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Client, Client_Service } from '..';
import { Client_ClientNotification_DetailUI } from '../detail/client-clientNotification.detail';
import { Client_ClientReview_DetailUI } from '../detail/client-clientReview.detail';
import { Client_Pet_DetailUI } from '../detail/client-pet.detail';
import { Client_PhoneNumberVerification_DetailUI } from '../detail/client-phoneNumberVerification.detail';
import { Client_ClientWallet_DetailUI } from '../detail/client-clientWallet.detail';



@Component({
  selector: 'base-client-master',
  templateUrl: './client.master.html',
  styleUrls: ['./client.master.scss'],
  providers: [
    Client_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ClientEditUI,        
    //ClientDeleteUI,
    Client_ClientNotification_DetailUI,
				Client_ClientReview_DetailUI,
				Client_Pet_DetailUI,
				Client_PhoneNumberVerification_DetailUI,
				Client_ClientWallet_DetailUI
  ]
})
export class ClientMasterUI extends MasterUI<Client> implements IMasterUI<Client> {

  constructor() {
    super(inject(Client_Service))
  }


}
