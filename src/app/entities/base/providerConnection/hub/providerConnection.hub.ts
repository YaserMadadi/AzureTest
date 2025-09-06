

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ProviderConnection, ProviderConnection_Service } from '..';
import { ProviderConnectionEditUI } from '../edit/providerConnection.edit'
import { ProviderConnectionDeleteUI } from '../delete/providerConnection.delete'
import { ConnectionType } from '../../connectionType';
import { Provider } from '../../provider';



@Component({
  selector: 'base-providerConnection-index',
  templateUrl: './providerConnection.hub.html',
  styleUrls: ['./providerConnection.hub.scss'],
  providers: [ProviderConnection_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ProviderConnectionEditUI,
    ProviderConnectionDeleteUI,
    LookupComponent,
  ]
})
export class ProviderConnectionHubUI extends HubUI<ProviderConnection> implements IHubUI<ProviderConnection> {

  constructor(public override service: ProviderConnection_Service = inject(ProviderConnection_Service)) {
    super(service);
    this.connectionTypeLinker = new ForeignkeyLinker<ConnectionType>(this.service.connectionTypeService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Connection Type', () => this.navigateToUrl('/base/connectionType')),
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
		];
  }

  public connectionTypeLinker: ForeignkeyLinker<ConnectionType>;

	public providerLinker: ForeignkeyLinker<Provider>;

  

}
