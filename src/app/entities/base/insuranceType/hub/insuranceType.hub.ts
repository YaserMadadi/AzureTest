

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { InsuranceType, InsuranceType_Service } from '..';
import { InsuranceTypeEditUI } from '../edit/insuranceType.edit'
import { InsuranceTypeDeleteUI } from '../delete/insuranceType.delete'



@Component({
  selector: 'base-insuranceType-index',
  templateUrl: './insuranceType.hub.html',
  styleUrls: ['./insuranceType.hub.scss'],
  providers: [InsuranceType_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    InsuranceTypeEditUI,
    InsuranceTypeDeleteUI,
    
  ]
})
export class InsuranceTypeHubUI extends HubUI<InsuranceType> implements IHubUI<InsuranceType> {

  constructor(public override service: InsuranceType_Service = inject(InsuranceType_Service)) {
    super(service);
    

    this.quickAddItems = [];

    this.linkedEntityItems = [
		];
  }

  

  

}
