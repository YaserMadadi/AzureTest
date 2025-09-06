

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Client, Client_Service } from '..';


@Component({
  selector: 'base-client-delete',
  templateUrl: './client.delete.html',
  styleUrls: ['./client.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ClientDeleteUI extends DeleteUI<Client> implements IDeleteUI<Client> {

  constructor() {
    super(inject(Client_Service));
  }

}
