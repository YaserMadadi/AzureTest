

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { TransactionType, TransactionType_Service } from '..';


@Component({
  selector: 'fund-transactionType-delete',
  templateUrl: './transactionType.delete.html',
  styleUrls: ['./transactionType.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class TransactionTypeDeleteUI extends DeleteUI<TransactionType> implements IDeleteUI<TransactionType> {

  constructor() {
    super(inject(TransactionType_Service));
  }

}
