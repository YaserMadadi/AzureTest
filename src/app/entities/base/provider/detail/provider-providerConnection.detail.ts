
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../provider';
import { ProviderConnection, ProviderConnection_Builder } from '../../providerConnection';
import { ProviderConnectionEditUI } from '../../providerConnection/edit/providerConnection.edit'
import { ProviderConnectionDeleteUI } from '../../providerConnection/delete/providerConnection.delete'
import { ConnectionType, ConnectionType_Service } from '../../connectionType';



@Component({
  selector: 'base-provider-providerConnection-detail',
  templateUrl: './provider-providerConnection.detail.html',
  styleUrls: ['./provider-providerConnection.detail.scss'],
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
export class Provider_ProviderConnection_DetailUI extends DetailUI<Provider, ProviderConnection> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfProviderConnection.bind(serviceCollection), inject(ProviderConnection_Builder));
    this.currentInstance = new ProviderConnection();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  public connectionTypeLinker: ForeignkeyLinker<ConnectionType> = new ForeignkeyLinker<ConnectionType>(inject(ConnectionType_Service), true);

		

}
