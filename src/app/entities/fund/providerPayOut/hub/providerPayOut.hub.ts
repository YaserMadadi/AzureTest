

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ProviderPayOut, ProviderPayOut_Service } from '..';
import { ProviderPayOutEditUI } from '../edit/providerPayOut.edit'
import { ProviderPayOutDeleteUI } from '../delete/providerPayOut.delete'
import { Provider } from '../../../base/provider';
import { TransactionStatus } from '../../transactionStatus';



@Component({
  selector: 'fund-providerPayOut-index',
  templateUrl: './providerPayOut.hub.html',
  styleUrls: ['./providerPayOut.hub.scss'],
  providers: [ProviderPayOut_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ProviderPayOutEditUI,
    ProviderPayOutDeleteUI,
    LookupComponent,
  ]
})
export class ProviderPayOutHubUI extends HubUI<ProviderPayOut> implements IHubUI<ProviderPayOut> {

  constructor(public override service: ProviderPayOut_Service = inject(ProviderPayOut_Service)) {
    super(service);
    this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
		this.transactionStatusLinker = new ForeignkeyLinker<TransactionStatus>(this.service.transactionStatusService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
			new DropdownMenuItem('Manage  Transaction Status', () => this.navigateToUrl('/fund/transactionStatus')),
		];
  }

  public providerLinker: ForeignkeyLinker<Provider>;

	public transactionStatusLinker: ForeignkeyLinker<TransactionStatus>;

  

}
