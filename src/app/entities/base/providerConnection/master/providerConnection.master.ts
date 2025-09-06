import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ProviderConnection, ProviderConnection_Service } from '..';



@Component({
  selector: 'base-providerConnection-master',
  templateUrl: './providerConnection.master.html',
  styleUrls: ['./providerConnection.master.scss'],
  providers: [
    ProviderConnection_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ProviderConnectionEditUI,        
    //ProviderConnectionDeleteUI,
    // No Item...
  ]
})
export class ProviderConnectionMasterUI extends MasterUI<ProviderConnection> implements IMasterUI<ProviderConnection> {

  constructor() {
    super(inject(ProviderConnection_Service))
  }


}
