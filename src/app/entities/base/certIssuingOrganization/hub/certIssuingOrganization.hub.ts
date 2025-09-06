

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { CertIssuingOrganization, CertIssuingOrganization_Service } from '..';
import { CertIssuingOrganizationEditUI } from '../edit/certIssuingOrganization.edit'
import { CertIssuingOrganizationDeleteUI } from '../delete/certIssuingOrganization.delete'
import { Certification } from '../../certification';
import { CertificationEditUI } from '../../certification/edit/certification.edit';



@Component({
  selector: 'base-certIssuingOrganization-index',
  templateUrl: './certIssuingOrganization.hub.html',
  styleUrls: ['./certIssuingOrganization.hub.scss'],
  providers: [CertIssuingOrganization_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    CertIssuingOrganizationEditUI,
    CertIssuingOrganizationDeleteUI,
    CertificationEditUI,
  ]
})
export class CertIssuingOrganizationHubUI extends HubUI<CertIssuingOrganization> implements IHubUI<CertIssuingOrganization> {

  constructor(public override service: CertIssuingOrganization_Service = inject(CertIssuingOrganization_Service)) {
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
    certification.certIssuingOrganization = this.currentInstance;
    this.certificationEditUI.Show(certification);
  }


}
