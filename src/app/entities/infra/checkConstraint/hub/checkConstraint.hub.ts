

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { CheckConstraint, CheckConstraint_Service } from '..';
import { CheckConstraintEditUI } from '../edit/checkConstraint.edit'
import { CheckConstraintDeleteUI } from '../delete/checkConstraint.delete'



@Component({
  selector: 'infra-checkConstraint-index',
  templateUrl: './checkConstraint.hub.html',
  styleUrls: ['./checkConstraint.hub.scss'],
  providers: [CheckConstraint_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    CheckConstraintEditUI,
    CheckConstraintDeleteUI,
    
  ]
})
export class CheckConstraintHubUI extends HubUI<CheckConstraint> implements IHubUI<CheckConstraint> {

  constructor(public override service: CheckConstraint_Service = inject(CheckConstraint_Service)) {
    super(service);
    

    this.quickAddItems = [];

    this.linkedEntityItems = [
		];
  }

  

  

}
