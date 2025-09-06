import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { DurationUnit, DurationUnit_Service } from '..';
import { DurationUnit_Booking_DetailUI } from '../detail/durationUnit-booking.detail';



@Component({
  selector: 'base-durationUnit-master',
  templateUrl: './durationUnit.master.html',
  styleUrls: ['./durationUnit.master.scss'],
  providers: [
    DurationUnit_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //DurationUnitEditUI,        
    //DurationUnitDeleteUI,
    DurationUnit_Booking_DetailUI
  ]
})
export class DurationUnitMasterUI extends MasterUI<DurationUnit> implements IMasterUI<DurationUnit> {

  constructor() {
    super(inject(DurationUnit_Service))
  }


}
