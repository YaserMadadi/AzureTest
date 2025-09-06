

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { TransactionStatus, TransactionStatus_Service } from '..';


@Component({
  selector: 'fund-transactionStatus-delete',
  templateUrl: './transactionStatus.delete.html',
  styleUrls: ['./transactionStatus.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class TransactionStatusDeleteUI extends DeleteUI<TransactionStatus> implements IDeleteUI<TransactionStatus> {

  constructor() {
    super(inject(TransactionStatus_Service));
  }

}
