

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { BookingService, BookingService_Service } from '..';


@Component({
  selector: 'base-bookingService-delete',
  templateUrl: './bookingService.delete.html',
  styleUrls: ['./bookingService.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class BookingServiceDeleteUI extends DeleteUI<BookingService> implements IDeleteUI<BookingService> {

  constructor() {
    super(inject(BookingService_Service));
  }

}
