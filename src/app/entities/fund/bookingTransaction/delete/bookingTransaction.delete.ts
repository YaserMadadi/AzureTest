

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { BookingTransaction, BookingTransaction_Service } from '..';


@Component({
  selector: 'fund-bookingTransaction-delete',
  templateUrl: './bookingTransaction.delete.html',
  styleUrls: ['./bookingTransaction.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class BookingTransactionDeleteUI extends DeleteUI<BookingTransaction> implements IDeleteUI<BookingTransaction> {

  constructor() {
    super(inject(BookingTransaction_Service));
  }

}
