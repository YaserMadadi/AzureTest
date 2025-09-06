import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { CertIssuingOrganization, CertIssuingOrganization_Service } from '..';
import { CertIssuingOrganization_Certification_DetailUI } from '../detail/certIssuingOrganization-certification.detail';



@Component({
  selector: 'base-certIssuingOrganization-master',
  templateUrl: './certIssuingOrganization.master.html',
  styleUrls: ['./certIssuingOrganization.master.scss'],
  providers: [
    CertIssuingOrganization_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //CertIssuingOrganizationEditUI,        
    //CertIssuingOrganizationDeleteUI,
    CertIssuingOrganization_Certification_DetailUI
  ]
})
export class CertIssuingOrganizationMasterUI extends MasterUI<CertIssuingOrganization> implements IMasterUI<CertIssuingOrganization> {

  constructor() {
    super(inject(CertIssuingOrganization_Service))
  }


}
