

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { WeightUnit, WeightUnit_Service } from '..';



@Component({
  selector: 'base-weightUnit-edit',
  templateUrl: './weightUnit.edit.html',
  styleUrls: ['./weightUnit.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class WeightUnitEditUI extends EditUI<WeightUnit> {
    
  constructor(public override service: WeightUnit_Service = inject(WeightUnit_Service )) {
    super(service); 
    
  }

  

  

}
