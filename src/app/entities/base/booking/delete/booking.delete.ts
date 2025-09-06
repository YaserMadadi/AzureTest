

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Booking, Booking_Service } from '..';


@Component({
  selector: 'base-booking-delete',
  templateUrl: './booking.delete.html',
  styleUrls: ['./booking.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class BookingDeleteUI extends DeleteUI<Booking> implements IDeleteUI<Booking> {

  constructor() {
    super(inject(Booking_Service));
  }

}
