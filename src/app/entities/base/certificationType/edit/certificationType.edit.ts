

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { CertificationType, CertificationType_Service } from '..';



@Component({
  selector: 'base-certificationType-edit',
  templateUrl: './certificationType.edit.html',
  styleUrls: ['./certificationType.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class CertificationTypeEditUI extends EditUI<CertificationType> {
    
  constructor(public override service: CertificationType_Service = inject(CertificationType_Service )) {
    super(service); 
    
  }

  

  

}
