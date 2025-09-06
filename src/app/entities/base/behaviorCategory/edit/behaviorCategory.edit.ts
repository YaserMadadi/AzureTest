

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { BehaviorCategory, BehaviorCategory_Service } from '..';



@Component({
  selector: 'base-behaviorCategory-edit',
  templateUrl: './behaviorCategory.edit.html',
  styleUrls: ['./behaviorCategory.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class BehaviorCategoryEditUI extends EditUI<BehaviorCategory> {
    
  constructor(public override service: BehaviorCategory_Service = inject(BehaviorCategory_Service )) {
    super(service); 
    
  }

  

  

}
