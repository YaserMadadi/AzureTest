import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { AcceptedPetCategory, AcceptedPetCategory_Service } from '..';



@Component({
  selector: 'base-acceptedPetCategory-master',
  templateUrl: './acceptedPetCategory.master.html',
  styleUrls: ['./acceptedPetCategory.master.scss'],
  providers: [
    AcceptedPetCategory_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //AcceptedPetCategoryEditUI,        
    //AcceptedPetCategoryDeleteUI,
    // No Item...
  ]
})
export class AcceptedPetCategoryMasterUI extends MasterUI<AcceptedPetCategory> implements IMasterUI<AcceptedPetCategory> {

  constructor() {
    super(inject(AcceptedPetCategory_Service))
  }


}
