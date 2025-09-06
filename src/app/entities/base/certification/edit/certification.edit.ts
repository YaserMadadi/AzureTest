

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Certification, Certification_Service } from '..';
import { CertificationType } from '../../certificationType';
import { CertIssuingOrganization } from '../../certIssuingOrganization';



@Component({
  selector: 'base-certification-edit',
  templateUrl: './certification.edit.html',
  styleUrls: ['./certification.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class CertificationEditUI extends EditUI<Certification> {
    
  constructor(public override service: Certification_Service = inject(Certification_Service )) {
    super(service); 
    this.certificationTypeLinker = new ForeignkeyLinker<CertificationType>(this.service.certificationTypeService, true);
		this.certIssuingOrganizationLinker = new ForeignkeyLinker<CertIssuingOrganization>(this.service.certIssuingOrganizationService, true);
  }

  @Input() 
  set certificationTypeLocked(value: boolean) {
    this.certificationTypeLinker.locked = value;
  }

	@Input() 
  set certIssuingOrganizationLocked(value: boolean) {
    this.certIssuingOrganizationLinker.locked = value;
  }

  public certificationTypeLinker: ForeignkeyLinker<CertificationType>;

	public certIssuingOrganizationLinker: ForeignkeyLinker<CertIssuingOrganization>;

}
