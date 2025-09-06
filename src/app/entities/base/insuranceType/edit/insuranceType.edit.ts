

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { InsuranceType, InsuranceType_Service } from '..';



@Component({
  selector: 'base-insuranceType-edit',
  templateUrl: './insuranceType.edit.html',
  styleUrls: ['./insuranceType.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class InsuranceTypeEditUI extends EditUI<InsuranceType> {
    
  constructor(public override service: InsuranceType_Service = inject(InsuranceType_Service )) {
    super(service); 
    
  }

  

  

}
