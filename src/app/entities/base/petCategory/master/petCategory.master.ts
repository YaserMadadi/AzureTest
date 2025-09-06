import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { PetCategory, PetCategory_Service } from '..';
import { PetCategory_AcceptedPetCategory_DetailUI } from '../detail/petCategory-acceptedPetCategory.detail';



@Component({
  selector: 'base-petCategory-master',
  templateUrl: './petCategory.master.html',
  styleUrls: ['./petCategory.master.scss'],
  providers: [
    PetCategory_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //PetCategoryEditUI,        
    //PetCategoryDeleteUI,
    PetCategory_AcceptedPetCategory_DetailUI
  ]
})
export class PetCategoryMasterUI extends MasterUI<PetCategory> implements IMasterUI<PetCategory> {

  constructor() {
    super(inject(PetCategory_Service))
  }


}
