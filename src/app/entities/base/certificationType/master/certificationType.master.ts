import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { CertificationType, CertificationType_Service } from '..';
import { CertificationType_Certification_DetailUI } from '../detail/certificationType-certification.detail';



@Component({
  selector: 'base-certificationType-master',
  templateUrl: './certificationType.master.html',
  styleUrls: ['./certificationType.master.scss'],
  providers: [
    CertificationType_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //CertificationTypeEditUI,        
    //CertificationTypeDeleteUI,
    CertificationType_Certification_DetailUI
  ]
})
export class CertificationTypeMasterUI extends MasterUI<CertificationType> implements IMasterUI<CertificationType> {

  constructor() {
    super(inject(CertificationType_Service))
  }


}
