

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { DurationUnit, DurationUnit_Service } from '..';



@Component({
  selector: 'base-durationUnit-edit',
  templateUrl: './durationUnit.edit.html',
  styleUrls: ['./durationUnit.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class DurationUnitEditUI extends EditUI<DurationUnit> {
    
  constructor(public override service: DurationUnit_Service = inject(DurationUnit_Service )) {
    super(service); 
    
  }

  

  

}
