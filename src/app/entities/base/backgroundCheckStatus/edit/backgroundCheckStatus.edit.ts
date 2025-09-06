

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { BackgroundCheckStatus, BackgroundCheckStatus_Service } from '..';



@Component({
  selector: 'base-backgroundCheckStatus-edit',
  templateUrl: './backgroundCheckStatus.edit.html',
  styleUrls: ['./backgroundCheckStatus.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class BackgroundCheckStatusEditUI extends EditUI<BackgroundCheckStatus> {
    
  constructor(public override service: BackgroundCheckStatus_Service = inject(BackgroundCheckStatus_Service )) {
    super(service); 
    
  }

  

  

}
