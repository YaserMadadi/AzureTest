import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { TransactionType, TransactionType_Service } from '..';
import { TransactionType_ClientWalletTransactionLog_DetailUI } from '../detail/transactionType-clientWalletTransactionLog.detail';



@Component({
  selector: 'fund-transactionType-master',
  templateUrl: './transactionType.master.html',
  styleUrls: ['./transactionType.master.scss'],
  providers: [
    TransactionType_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //TransactionTypeEditUI,        
    //TransactionTypeDeleteUI,
    TransactionType_ClientWalletTransactionLog_DetailUI
  ]
})
export class TransactionTypeMasterUI extends MasterUI<TransactionType> implements IMasterUI<TransactionType> {

  constructor() {
    super(inject(TransactionType_Service))
  }


}
