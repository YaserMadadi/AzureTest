

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { VerificationStatus, VerificationStatus_Service } from '..';



@Component({
  selector: 'base-verificationStatus-edit',
  templateUrl: './verificationStatus.edit.html',
  styleUrls: ['./verificationStatus.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class VerificationStatusEditUI extends EditUI<VerificationStatus> {
    
  constructor(public override service: VerificationStatus_Service = inject(VerificationStatus_Service )) {
    super(service); 
    
  }

  

  

}
