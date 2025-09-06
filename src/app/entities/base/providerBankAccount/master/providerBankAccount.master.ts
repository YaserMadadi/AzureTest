import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ProviderBankAccount, ProviderBankAccount_Service } from '..';



@Component({
  selector: 'base-providerBankAccount-master',
  templateUrl: './providerBankAccount.master.html',
  styleUrls: ['./providerBankAccount.master.scss'],
  providers: [
    ProviderBankAccount_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ProviderBankAccountEditUI,        
    //ProviderBankAccountDeleteUI,
    // No Item...
  ]
})
export class ProviderBankAccountMasterUI extends MasterUI<ProviderBankAccount> implements IMasterUI<ProviderBankAccount> {

  constructor() {
    super(inject(ProviderBankAccount_Service))
  }


}
