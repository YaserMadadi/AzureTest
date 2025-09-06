import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { BehaviorCategory, BehaviorCategory_Service } from '..';
import { BehaviorCategory_PetBehavior_DetailUI } from '../detail/behaviorCategory-petBehavior.detail';



@Component({
  selector: 'base-behaviorCategory-master',
  templateUrl: './behaviorCategory.master.html',
  styleUrls: ['./behaviorCategory.master.scss'],
  providers: [
    BehaviorCategory_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //BehaviorCategoryEditUI,        
    //BehaviorCategoryDeleteUI,
    BehaviorCategory_PetBehavior_DetailUI
  ]
})
export class BehaviorCategoryMasterUI extends MasterUI<BehaviorCategory> implements IMasterUI<BehaviorCategory> {

  constructor() {
    super(inject(BehaviorCategory_Service))
  }


}
