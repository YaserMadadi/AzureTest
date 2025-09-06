

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { BookingStatus, BookingStatus_Service } from '..';



@Component({
  selector: 'base-bookingStatus-edit',
  templateUrl: './bookingStatus.edit.html',
  styleUrls: ['./bookingStatus.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class BookingStatusEditUI extends EditUI<BookingStatus> {
    
  constructor(public override service: BookingStatus_Service = inject(BookingStatus_Service )) {
    super(service); 
    
  }

  

  

}
