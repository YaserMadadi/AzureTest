

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { PetCategory, PetCategory_Service } from '..';



@Component({
  selector: 'base-petCategory-edit',
  templateUrl: './petCategory.edit.html',
  styleUrls: ['./petCategory.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class PetCategoryEditUI extends EditUI<PetCategory> {
    
  constructor(public override service: PetCategory_Service = inject(PetCategory_Service )) {
    super(service); 
    
  }

  

  

}
