import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Bank, Bank_Service } from '..';
import { Bank_ProviderBankAccount_DetailUI } from '../detail/bank-providerBankAccount.detail';



@Component({
  selector: 'base-bank-master',
  templateUrl: './bank.master.html',
  styleUrls: ['./bank.master.scss'],
  providers: [
    Bank_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //BankEditUI,        
    //BankDeleteUI,
    Bank_ProviderBankAccount_DetailUI
  ]
})
export class BankMasterUI extends MasterUI<Bank> implements IMasterUI<Bank> {

  constructor() {
    super(inject(Bank_Service))
  }


}
