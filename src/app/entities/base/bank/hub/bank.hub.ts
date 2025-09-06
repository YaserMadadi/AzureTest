

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Bank, Bank_Service } from '..';
import { BankEditUI } from '../edit/bank.edit'
import { BankDeleteUI } from '../delete/bank.delete'
import { ProviderBankAccount } from '../../providerBankAccount';
import { ProviderBankAccountEditUI } from '../../providerBankAccount/edit/providerBankAccount.edit';



@Component({
  selector: 'base-bank-index',
  templateUrl: './bank.hub.html',
  styleUrls: ['./bank.hub.scss'],
  providers: [Bank_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    BankEditUI,
    BankDeleteUI,
    ProviderBankAccountEditUI,
  ]
})
export class BankHubUI extends HubUI<Bank> implements IHubUI<Bank> {

  constructor(public override service: Bank_Service = inject(Bank_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Provider Bank Account', () => this.onAddProviderBankAccount()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('providerBankAccountEditUI')
  public providerBankAccountEditUI!: ProviderBankAccountEditUI;

  onAddProviderBankAccount() {
    let providerBankAccount = new ProviderBankAccount();
    providerBankAccount.bank = this.currentInstance;
    this.providerBankAccountEditUI.Show(providerBankAccount);
  }


}
