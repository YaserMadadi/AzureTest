import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { PetBehavior, PetBehavior_Service } from '..';



@Component({
  selector: 'base-petBehavior-master',
  templateUrl: './petBehavior.master.html',
  styleUrls: ['./petBehavior.master.scss'],
  providers: [
    PetBehavior_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //PetBehaviorEditUI,        
    //PetBehaviorDeleteUI,
    // No Item...
  ]
})
export class PetBehaviorMasterUI extends MasterUI<PetBehavior> implements IMasterUI<PetBehavior> {

  constructor() {
    super(inject(PetBehavior_Service))
  }


}
