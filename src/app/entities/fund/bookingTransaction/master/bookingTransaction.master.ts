import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { BookingTransaction, BookingTransaction_Service } from '..';



@Component({
  selector: 'fund-bookingTransaction-master',
  templateUrl: './bookingTransaction.master.html',
  styleUrls: ['./bookingTransaction.master.scss'],
  providers: [
    BookingTransaction_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //BookingTransactionEditUI,        
    //BookingTransactionDeleteUI,
    // No Item...
  ]
})
export class BookingTransactionMasterUI extends MasterUI<BookingTransaction> implements IMasterUI<BookingTransaction> {

  constructor() {
    super(inject(BookingTransaction_Service))
  }


}
