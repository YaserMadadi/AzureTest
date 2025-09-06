
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Bank, Bank_ServiceCollection } from '../../bank';
import { ProviderBankAccount, ProviderBankAccount_Builder } from '../../providerBankAccount';
import { ProviderBankAccountEditUI } from '../../providerBankAccount/edit/providerBankAccount.edit'
import { ProviderBankAccountDeleteUI } from '../../providerBankAccount/delete/providerBankAccount.delete'
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-bank-providerBankAccount-detail',
  templateUrl: './bank-providerBankAccount.detail.html',
  styleUrls: ['./bank-providerBankAccount.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ProviderBankAccountEditUI,        
    ProviderBankAccountDeleteUI,
  ]
}) 
export class Bank_ProviderBankAccount_DetailUI extends DetailUI<Bank, ProviderBankAccount> {

  constructor(private serviceCollection: Bank_ServiceCollection = inject(Bank_ServiceCollection)) {
    super(serviceCollection.CollectionOfProviderBankAccount.bind(serviceCollection), inject(ProviderBankAccount_Builder));
    this.currentInstance = new ProviderBankAccount();
  }

  @Input()
  public set bank(value: Bank) {
    this.masterInstance = { ...value };
    //this.currentInstance.bank = { ...value };
    this.sourceInstance.bank = { ...value };
  }

  public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
