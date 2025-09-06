

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { MedicationType, MedicationType_Service } from '..';



@Component({
  selector: 'base-medicationType-edit',
  templateUrl: './medicationType.edit.html',
  styleUrls: ['./medicationType.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class MedicationTypeEditUI extends EditUI<MedicationType> {
    
  constructor(public override service: MedicationType_Service = inject(MedicationType_Service )) {
    super(service); 
    
  }

  

  

}
