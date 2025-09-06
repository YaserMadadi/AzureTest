
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { CertificationType, CertificationType_ServiceCollection } from '../../certificationType';
import { Certification, Certification_Builder } from '../../certification';
import { CertificationEditUI } from '../../certification/edit/certification.edit'
import { CertificationDeleteUI } from '../../certification/delete/certification.delete'
import { CertIssuingOrganization, CertIssuingOrganization_Service } from '../../certIssuingOrganization';



@Component({
  selector: 'base-certificationType-certification-detail',
  templateUrl: './certificationType-certification.detail.html',
  styleUrls: ['./certificationType-certification.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    CertificationEditUI,        
    CertificationDeleteUI,
  ]
}) 
export class CertificationType_Certification_DetailUI extends DetailUI<CertificationType, Certification> {

  constructor(private serviceCollection: CertificationType_ServiceCollection = inject(CertificationType_ServiceCollection)) {
    super(serviceCollection.CollectionOfCertification.bind(serviceCollection), inject(Certification_Builder));
    this.currentInstance = new Certification();
  }

  @Input()
  public set certificationType(value: CertificationType) {
    this.masterInstance = { ...value };
    //this.currentInstance.certificationType = { ...value };
    this.sourceInstance.certificationType = { ...value };
  }

  public certIssuingOrganizationLinker: ForeignkeyLinker<CertIssuingOrganization> = new ForeignkeyLinker<CertIssuingOrganization>(inject(CertIssuingOrganization_Service), true);

		

}
