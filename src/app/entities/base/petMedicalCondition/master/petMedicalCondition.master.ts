import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { PetMedicalCondition, PetMedicalCondition_Service } from '..';



@Component({
  selector: 'base-petMedicalCondition-master',
  templateUrl: './petMedicalCondition.master.html',
  styleUrls: ['./petMedicalCondition.master.scss'],
  providers: [
    PetMedicalCondition_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //PetMedicalConditionEditUI,        
    //PetMedicalConditionDeleteUI,
    // No Item...
  ]
})
export class PetMedicalConditionMasterUI extends MasterUI<PetMedicalCondition> implements IMasterUI<PetMedicalCondition> {

  constructor() {
    super(inject(PetMedicalCondition_Service))
  }


}
