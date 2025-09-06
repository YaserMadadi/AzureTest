import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ClientWallet, ClientWallet_Service } from '..';
import { ClientWallet_BookingTransaction_DetailUI } from '../detail/clientWallet-bookingTransaction.detail';
import { ClientWallet_ClientWalletTransactionLog_DetailUI } from '../detail/clientWallet-clientWalletTransactionLog.detail';
import { ClientWallet_WalletTopUp_DetailUI } from '../detail/clientWallet-walletTopUp.detail';



@Component({
  selector: 'fund-clientWallet-master',
  templateUrl: './clientWallet.master.html',
  styleUrls: ['./clientWallet.master.scss'],
  providers: [
    ClientWallet_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ClientWalletEditUI,        
    //ClientWalletDeleteUI,
    ClientWallet_BookingTransaction_DetailUI,
				ClientWallet_ClientWalletTransactionLog_DetailUI,
				ClientWallet_WalletTopUp_DetailUI
  ]
})
export class ClientWalletMasterUI extends MasterUI<ClientWallet> implements IMasterUI<ClientWallet> {

  constructor() {
    super(inject(ClientWallet_Service))
  }


}
