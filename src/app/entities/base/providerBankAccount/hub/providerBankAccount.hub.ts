

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ProviderBankAccount, ProviderBankAccount_Service } from '..';
import { ProviderBankAccountEditUI } from '../edit/providerBankAccount.edit'
import { ProviderBankAccountDeleteUI } from '../delete/providerBankAccount.delete'
import { Bank } from '../../bank';
import { Provider } from '../../provider';



@Component({
  selector: 'base-providerBankAccount-index',
  templateUrl: './providerBankAccount.hub.html',
  styleUrls: ['./providerBankAccount.hub.scss'],
  providers: [ProviderBankAccount_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ProviderBankAccountEditUI,
    ProviderBankAccountDeleteUI,
    LookupComponent,
  ]
})
export class ProviderBankAccountHubUI extends HubUI<ProviderBankAccount> implements IHubUI<ProviderBankAccount> {

  constructor(public override service: ProviderBankAccount_Service = inject(ProviderBankAccount_Service)) {
    super(service);
    this.bankLinker = new ForeignkeyLinker<Bank>(this.service.bankService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Bank', () => this.navigateToUrl('/base/bank')),
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
		];
  }

  public bankLinker: ForeignkeyLinker<Bank>;

	public providerLinker: ForeignkeyLinker<Provider>;

  

}
