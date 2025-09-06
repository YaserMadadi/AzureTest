import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ProviderWallet, ProviderWallet_Service } from '..';
import { ProviderWallet_BookingTransaction_DetailUI } from '../detail/providerWallet-bookingTransaction.detail';



@Component({
  selector: 'fund-providerWallet-master',
  templateUrl: './providerWallet.master.html',
  styleUrls: ['./providerWallet.master.scss'],
  providers: [
    ProviderWallet_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ProviderWalletEditUI,        
    //ProviderWalletDeleteUI,
    ProviderWallet_BookingTransaction_DetailUI
  ]
})
export class ProviderWalletMasterUI extends MasterUI<ProviderWallet> implements IMasterUI<ProviderWallet> {

  constructor() {
    super(inject(ProviderWallet_Service))
  }


}
