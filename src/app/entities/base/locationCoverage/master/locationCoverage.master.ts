import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { LocationCoverage, LocationCoverage_Service } from '..';



@Component({
  selector: 'base-locationCoverage-master',
  templateUrl: './locationCoverage.master.html',
  styleUrls: ['./locationCoverage.master.scss'],
  providers: [
    LocationCoverage_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //LocationCoverageEditUI,        
    //LocationCoverageDeleteUI,
    // No Item...
  ]
})
export class LocationCoverageMasterUI extends MasterUI<LocationCoverage> implements IMasterUI<LocationCoverage> {

  constructor() {
    super(inject(LocationCoverage_Service))
  }


}
