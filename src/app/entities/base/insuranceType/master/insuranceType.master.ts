import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { InsuranceType, InsuranceType_Service } from '..';



@Component({
  selector: 'base-insuranceType-master',
  templateUrl: './insuranceType.master.html',
  styleUrls: ['./insuranceType.master.scss'],
  providers: [
    InsuranceType_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //InsuranceTypeEditUI,        
    //InsuranceTypeDeleteUI,
    // No Item...
  ]
})
export class InsuranceTypeMasterUI extends MasterUI<InsuranceType> implements IMasterUI<InsuranceType> {

  constructor() {
    super(inject(InsuranceType_Service))
  }


}
