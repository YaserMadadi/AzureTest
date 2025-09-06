

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ConnectionType, ConnectionType_Service } from '..';
import { ConnectionTypeEditUI } from '../edit/connectionType.edit'
import { ConnectionTypeDeleteUI } from '../delete/connectionType.delete'
import { ProviderConnection } from '../../providerConnection';
import { ProviderConnectionEditUI } from '../../providerConnection/edit/providerConnection.edit';



@Component({
  selector: 'base-connectionType-index',
  templateUrl: './connectionType.hub.html',
  styleUrls: ['./connectionType.hub.scss'],
  providers: [ConnectionType_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ConnectionTypeEditUI,
    ConnectionTypeDeleteUI,
    ProviderConnectionEditUI,
  ]
})
export class ConnectionTypeHubUI extends HubUI<ConnectionType> implements IHubUI<ConnectionType> {

  constructor(public override service: ConnectionType_Service = inject(ConnectionType_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Provider Connection', () => this.onAddProviderConnection()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('providerConnectionEditUI')
  public providerConnectionEditUI!: ProviderConnectionEditUI;

  onAddProviderConnection() {
    let providerConnection = new ProviderConnection();
    providerConnection.connectionType = this.currentInstance;
    this.providerConnectionEditUI.Show(providerConnection);
  }


}
