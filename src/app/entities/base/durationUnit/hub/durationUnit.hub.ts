

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { DurationUnit, DurationUnit_Service } from '..';
import { DurationUnitEditUI } from '../edit/durationUnit.edit'
import { DurationUnitDeleteUI } from '../delete/durationUnit.delete'
import { Booking } from '../../booking';
import { BookingEditUI } from '../../booking/edit/booking.edit';



@Component({
  selector: 'base-durationUnit-index',
  templateUrl: './durationUnit.hub.html',
  styleUrls: ['./durationUnit.hub.scss'],
  providers: [DurationUnit_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    DurationUnitEditUI,
    DurationUnitDeleteUI,
    BookingEditUI,
  ]
})
export class DurationUnitHubUI extends HubUI<DurationUnit> implements IHubUI<DurationUnit> {

  constructor(public override service: DurationUnit_Service = inject(DurationUnit_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Booking', () => this.onAddBooking()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('bookingEditUI')
  public bookingEditUI!: BookingEditUI;

  onAddBooking() {
    let booking = new Booking();
    booking.durationUnit = this.currentInstance;
    this.bookingEditUI.Show(booking);
  }


}
