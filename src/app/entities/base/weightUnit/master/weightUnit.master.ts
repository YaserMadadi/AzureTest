import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { WeightUnit, WeightUnit_Service } from '..';
import { WeightUnit_Pet_DetailUI } from '../detail/weightUnit-pet.detail';



@Component({
  selector: 'base-weightUnit-master',
  templateUrl: './weightUnit.master.html',
  styleUrls: ['./weightUnit.master.scss'],
  providers: [
    WeightUnit_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //WeightUnitEditUI,        
    //WeightUnitDeleteUI,
    WeightUnit_Pet_DetailUI
  ]
})
export class WeightUnitMasterUI extends MasterUI<WeightUnit> implements IMasterUI<WeightUnit> {

  constructor() {
    super(inject(WeightUnit_Service))
  }


}
