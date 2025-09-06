

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { CheckConstraint, CheckConstraint_Service } from '..';



@Component({
  selector: 'infra-checkConstraint-edit',
  templateUrl: './checkConstraint.edit.html',
  styleUrls: ['./checkConstraint.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class CheckConstraintEditUI extends EditUI<CheckConstraint> {
    
  constructor(public override service: CheckConstraint_Service = inject(CheckConstraint_Service )) {
    super(service); 
    
  }

  

  

}
