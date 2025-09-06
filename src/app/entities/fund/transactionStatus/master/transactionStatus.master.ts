import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { TransactionStatus, TransactionStatus_Service } from '..';
import { TransactionStatus_ClientWalletTransactionLog_DetailUI } from '../detail/transactionStatus-clientWalletTransactionLog.detail';
import { TransactionStatus_ProviderPayOut_DetailUI } from '../detail/transactionStatus-providerPayOut.detail';
import { TransactionStatus_WalletTopUp_DetailUI } from '../detail/transactionStatus-walletTopUp.detail';



@Component({
  selector: 'fund-transactionStatus-master',
  templateUrl: './transactionStatus.master.html',
  styleUrls: ['./transactionStatus.master.scss'],
  providers: [
    TransactionStatus_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //TransactionStatusEditUI,        
    //TransactionStatusDeleteUI,
    TransactionStatus_ClientWalletTransactionLog_DetailUI,
				TransactionStatus_ProviderPayOut_DetailUI,
				TransactionStatus_WalletTopUp_DetailUI
  ]
})
export class TransactionStatusMasterUI extends MasterUI<TransactionStatus> implements IMasterUI<TransactionStatus> {

  constructor() {
    super(inject(TransactionStatus_Service))
  }


}
