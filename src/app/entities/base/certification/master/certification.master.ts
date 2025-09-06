import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Certification, Certification_Service } from '..';
import { Certification_ProviderCertification_DetailUI } from '../detail/certification-providerCertification.detail';



@Component({
  selector: 'base-certification-master',
  templateUrl: './certification.master.html',
  styleUrls: ['./certification.master.scss'],
  providers: [
    Certification_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //CertificationEditUI,        
    //CertificationDeleteUI,
    Certification_ProviderCertification_DetailUI
  ]
})
export class CertificationMasterUI extends MasterUI<Certification> implements IMasterUI<Certification> {

  constructor() {
    super(inject(Certification_Service))
  }


}
