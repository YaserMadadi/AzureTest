

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ProviderConnection, ProviderConnection_Service } from '..';


@Component({
  selector: 'base-providerConnection-delete',
  templateUrl: './providerConnection.delete.html',
  styleUrls: ['./providerConnection.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ProviderConnectionDeleteUI extends DeleteUI<ProviderConnection> implements IDeleteUI<ProviderConnection> {

  constructor() {
    super(inject(ProviderConnection_Service));
  }

}
