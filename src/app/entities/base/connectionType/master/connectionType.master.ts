import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ConnectionType, ConnectionType_Service } from '..';
import { ConnectionType_ProviderConnection_DetailUI } from '../detail/connectionType-providerConnection.detail';



@Component({
  selector: 'base-connectionType-master',
  templateUrl: './connectionType.master.html',
  styleUrls: ['./connectionType.master.scss'],
  providers: [
    ConnectionType_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ConnectionTypeEditUI,        
    //ConnectionTypeDeleteUI,
    ConnectionType_ProviderConnection_DetailUI
  ]
})
export class ConnectionTypeMasterUI extends MasterUI<ConnectionType> implements IMasterUI<ConnectionType> {

  constructor() {
    super(inject(ConnectionType_Service))
  }


}
