
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../provider';
import { ProviderBankAccount, ProviderBankAccount_Builder } from '../../providerBankAccount';
import { ProviderBankAccountEditUI } from '../../providerBankAccount/edit/providerBankAccount.edit'
import { ProviderBankAccountDeleteUI } from '../../providerBankAccount/delete/providerBankAccount.delete'
import { Bank, Bank_Service } from '../../bank';



@Component({
  selector: 'base-provider-providerBankAccount-detail',
  templateUrl: './provider-providerBankAccount.detail.html',
  styleUrls: ['./provider-providerBankAccount.detail.scss'],
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
export class Provider_ProviderBankAccount_DetailUI extends DetailUI<Provider, ProviderBankAccount> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfProviderBankAccount.bind(serviceCollection), inject(ProviderBankAccount_Builder));
    this.currentInstance = new ProviderBankAccount();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  public bankLinker: ForeignkeyLinker<Bank> = new ForeignkeyLinker<Bank>(inject(Bank_Service), true);

		

}
