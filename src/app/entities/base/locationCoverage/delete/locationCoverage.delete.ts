

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { LocationCoverage, LocationCoverage_Service } from '..';


@Component({
  selector: 'base-locationCoverage-delete',
  templateUrl: './locationCoverage.delete.html',
  styleUrls: ['./locationCoverage.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class LocationCoverageDeleteUI extends DeleteUI<LocationCoverage> implements IDeleteUI<LocationCoverage> {

  constructor() {
    super(inject(LocationCoverage_Service));
  }

}
