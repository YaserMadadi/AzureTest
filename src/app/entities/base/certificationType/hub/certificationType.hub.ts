

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { CertificationType, CertificationType_Service } from '..';
import { CertificationTypeEditUI } from '../edit/certificationType.edit'
import { CertificationTypeDeleteUI } from '../delete/certificationType.delete'
import { Certification } from '../../certification';
import { CertificationEditUI } from '../../certification/edit/certification.edit';



@Component({
  selector: 'base-certificationType-index',
  templateUrl: './certificationType.hub.html',
  styleUrls: ['./certificationType.hub.scss'],
  providers: [CertificationType_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    CertificationTypeEditUI,
    CertificationTypeDeleteUI,
    CertificationEditUI,
  ]
})
export class CertificationTypeHubUI extends HubUI<CertificationType> implements IHubUI<CertificationType> {

  constructor(public override service: CertificationType_Service = inject(CertificationType_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Certification', () => this.onAddCertification()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('certificationEditUI')
  public certificationEditUI!: CertificationEditUI;

  onAddCertification() {
    let certification = new Certification();
    certification.certificationType = this.currentInstance;
    this.certificationEditUI.Show(certification);
  }


}
