import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ClientWalletTransactionLog, ClientWalletTransactionLog_Service } from '..';



@Component({
  selector: 'fund-clientWalletTransactionLog-master',
  templateUrl: './clientWalletTransactionLog.master.html',
  styleUrls: ['./clientWalletTransactionLog.master.scss'],
  providers: [
    ClientWalletTransactionLog_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ClientWalletTransactionLogEditUI,        
    //ClientWalletTransactionLogDeleteUI,
    // No Item...
  ]
})
export class ClientWalletTransactionLogMasterUI extends MasterUI<ClientWalletTransactionLog> implements IMasterUI<ClientWalletTransactionLog> {

  constructor() {
    super(inject(ClientWalletTransactionLog_Service))
  }


}
