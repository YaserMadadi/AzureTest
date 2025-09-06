import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Provider, Provider_Service } from '..';
import { Provider_AcceptedPetCategory_DetailUI } from '../detail/provider-acceptedPetCategory.detail';
import { Provider_Booking_DetailUI } from '../detail/provider-booking.detail';
import { Provider_ClientReview_DetailUI } from '../detail/provider-clientReview.detail';
import { Provider_LocationCoverage_DetailUI } from '../detail/provider-locationCoverage.detail';
import { Provider_ProviderBankAccount_DetailUI } from '../detail/provider-providerBankAccount.detail';
import { Provider_ProviderCertification_DetailUI } from '../detail/provider-providerCertification.detail';
import { Provider_ProviderConnection_DetailUI } from '../detail/provider-providerConnection.detail';
import { Provider_ProviderService_DetailUI } from '../detail/provider-providerService.detail';
import { Provider_WorkTime_DetailUI } from '../detail/provider-workTime.detail';
import { Provider_ProviderPayOut_DetailUI } from '../detail/provider-providerPayOut.detail';
import { Provider_ProviderWallet_DetailUI } from '../detail/provider-providerWallet.detail';



@Component({
  selector: 'base-provider-master',
  templateUrl: './provider.master.html',
  styleUrls: ['./provider.master.scss'],
  providers: [
    Provider_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ProviderEditUI,        
    //ProviderDeleteUI,
    Provider_AcceptedPetCategory_DetailUI,
				Provider_Booking_DetailUI,
				Provider_ClientReview_DetailUI,
				Provider_LocationCoverage_DetailUI,
				Provider_ProviderBankAccount_DetailUI,
				Provider_ProviderCertification_DetailUI,
				Provider_ProviderConnection_DetailUI,
				Provider_ProviderService_DetailUI,
				Provider_WorkTime_DetailUI,
				Provider_ProviderPayOut_DetailUI,
				Provider_ProviderWallet_DetailUI
  ]
})
export class ProviderMasterUI extends MasterUI<Provider> implements IMasterUI<Provider> {

  constructor() {
    super(inject(Provider_Service))
  }


}
