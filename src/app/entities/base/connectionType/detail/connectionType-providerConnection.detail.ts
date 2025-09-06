
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { ConnectionType, ConnectionType_ServiceCollection } from '../../connectionType';
import { ProviderConnection, ProviderConnection_Builder } from '../../providerConnection';
import { ProviderConnectionEditUI } from '../../providerConnection/edit/providerConnection.edit'
import { ProviderConnectionDeleteUI } from '../../providerConnection/delete/providerConnection.delete'
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-connectionType-providerConnection-detail',
  templateUrl: './connectionType-providerConnection.detail.html',
  styleUrls: ['./connectionType-providerConnection.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ProviderConnectionEditUI,        
    ProviderConnectionDeleteUI,
  ]
}) 
export class ConnectionType_ProviderConnection_DetailUI extends DetailUI<ConnectionType, ProviderConnection> {

  constructor(private serviceCollection: ConnectionType_ServiceCollection = inject(ConnectionType_ServiceCollection)) {
    super(serviceCollection.CollectionOfProviderConnection.bind(serviceCollection), inject(ProviderConnection_Builder));
    this.currentInstance = new ProviderConnection();
  }

  @Input()
  public set connectionType(value: ConnectionType) {
    this.masterInstance = { ...value };
    //this.currentInstance.connectionType = { ...value };
    this.sourceInstance.connectionType = { ...value };
  }

  public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
