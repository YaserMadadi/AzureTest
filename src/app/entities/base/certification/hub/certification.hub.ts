

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Certification, Certification_Service } from '..';
import { CertificationEditUI } from '../edit/certification.edit'
import { CertificationDeleteUI } from '../delete/certification.delete'
import { CertificationType } from '../../certificationType';
import { CertIssuingOrganization } from '../../certIssuingOrganization';
import { ProviderCertification } from '../../providerCertification';
import { ProviderCertificationEditUI } from '../../providerCertification/edit/providerCertification.edit';



@Component({
  selector: 'base-certification-index',
  templateUrl: './certification.hub.html',
  styleUrls: ['./certification.hub.scss'],
  providers: [Certification_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    CertificationEditUI,
    CertificationDeleteUI,
    LookupComponent,
		ProviderCertificationEditUI,
  ]
})
export class CertificationHubUI extends HubUI<Certification> implements IHubUI<Certification> {

  constructor(public override service: Certification_Service = inject(Certification_Service)) {
    super(service);
    this.certificationTypeLinker = new ForeignkeyLinker<CertificationType>(this.service.certificationTypeService, true);
		this.certIssuingOrganizationLinker = new ForeignkeyLinker<CertIssuingOrganization>(this.service.certIssuingOrganizationService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Provider Certification', () => this.onAddProviderCertification()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Certification Type', () => this.navigateToUrl('/base/certificationType')),
			new DropdownMenuItem('Manage  Cert Issuing Organization', () => this.navigateToUrl('/base/certIssuingOrganization')),
		];
  }

  public certificationTypeLinker: ForeignkeyLinker<CertificationType>;

	public certIssuingOrganizationLinker: ForeignkeyLinker<CertIssuingOrganization>;

  
  @ViewChild('providerCertificationEditUI')
  public providerCertificationEditUI!: ProviderCertificationEditUI;

  onAddProviderCertification() {
    let providerCertification = new ProviderCertification();
    providerCertification.certification = this.currentInstance;
    this.providerCertificationEditUI.Show(providerCertification);
  }


}
