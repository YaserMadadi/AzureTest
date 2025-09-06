

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ConnectionType, ConnectionType_Service } from '..';


@Component({
  selector: 'base-connectionType-delete',
  templateUrl: './connectionType.delete.html',
  styleUrls: ['./connectionType.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ConnectionTypeDeleteUI extends DeleteUI<ConnectionType> implements IDeleteUI<ConnectionType> {

  constructor() {
    super(inject(ConnectionType_Service));
  }

}
