

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ExceptionBackend, ExceptionBackend_Service } from '..';


@Component({
  selector: 'infra-exceptionBackend-delete',
  templateUrl: './exceptionBackend.delete.html',
  styleUrls: ['./exceptionBackend.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ExceptionBackendDeleteUI extends DeleteUI<ExceptionBackend> implements IDeleteUI<ExceptionBackend> {

  constructor() {
    super(inject(ExceptionBackend_Service));
  }

}
