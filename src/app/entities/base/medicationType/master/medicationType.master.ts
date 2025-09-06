import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { MedicationType, MedicationType_Service } from '..';
import { MedicationType_PetMedicalCondition_DetailUI } from '../detail/medicationType-petMedicalCondition.detail';



@Component({
  selector: 'base-medicationType-master',
  templateUrl: './medicationType.master.html',
  styleUrls: ['./medicationType.master.scss'],
  providers: [
    MedicationType_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //MedicationTypeEditUI,        
    //MedicationTypeDeleteUI,
    MedicationType_PetMedicalCondition_DetailUI
  ]
})
export class MedicationTypeMasterUI extends MasterUI<MedicationType> implements IMasterUI<MedicationType> {

  constructor() {
    super(inject(MedicationType_Service))
  }


}
