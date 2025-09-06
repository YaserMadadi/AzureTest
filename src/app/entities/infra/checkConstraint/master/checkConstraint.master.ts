import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { CheckConstraint, CheckConstraint_Service } from '..';



@Component({
  selector: 'infra-checkConstraint-master',
  templateUrl: './checkConstraint.master.html',
  styleUrls: ['./checkConstraint.master.scss'],
  providers: [
    CheckConstraint_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //CheckConstraintEditUI,        
    //CheckConstraintDeleteUI,
    // No Item...
  ]
})
export class CheckConstraintMasterUI extends MasterUI<CheckConstraint> implements IMasterUI<CheckConstraint> {

  constructor() {
    super(inject(CheckConstraint_Service))
  }


}
