

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { CertIssuingOrganization, CertIssuingOrganization_Service } from '..';



@Component({
  selector: 'base-certIssuingOrganization-edit',
  templateUrl: './certIssuingOrganization.edit.html',
  styleUrls: ['./certIssuingOrganization.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class CertIssuingOrganizationEditUI extends EditUI<CertIssuingOrganization> {
    
  constructor(public override service: CertIssuingOrganization_Service = inject(CertIssuingOrganization_Service )) {
    super(service); 
    
  }

  

  

}
