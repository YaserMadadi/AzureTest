
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { CertIssuingOrganization, CertIssuingOrganization_ServiceCollection } from '../../certIssuingOrganization';
import { Certification, Certification_Builder } from '../../certification';
import { CertificationEditUI } from '../../certification/edit/certification.edit'
import { CertificationDeleteUI } from '../../certification/delete/certification.delete'
import { CertificationType, CertificationType_Service } from '../../certificationType';



@Component({
  selector: 'base-certIssuingOrganization-certification-detail',
  templateUrl: './certIssuingOrganization-certification.detail.html',
  styleUrls: ['./certIssuingOrganization-certification.detail.scss'],
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
export class CertIssuingOrganization_Certification_DetailUI extends DetailUI<CertIssuingOrganization, Certification> {

  constructor(private serviceCollection: CertIssuingOrganization_ServiceCollection = inject(CertIssuingOrganization_ServiceCollection)) {
    super(serviceCollection.CollectionOfCertification.bind(serviceCollection), inject(Certification_Builder));
    this.currentInstance = new Certification();
  }

  @Input()
  public set certIssuingOrganization(value: CertIssuingOrganization) {
    this.masterInstance = { ...value };
    //this.currentInstance.certIssuingOrganization = { ...value };
    this.sourceInstance.certIssuingOrganization = { ...value };
  }

  public certificationTypeLinker: ForeignkeyLinker<CertificationType> = new ForeignkeyLinker<CertificationType>(inject(CertificationType_Service), true);

		

}
