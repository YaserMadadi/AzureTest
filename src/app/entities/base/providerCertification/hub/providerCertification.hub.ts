

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ProviderCertification, ProviderCertification_Service } from '..';
import { ProviderCertificationEditUI } from '../edit/providerCertification.edit'
import { ProviderCertificationDeleteUI } from '../delete/providerCertification.delete'
import { Certification } from '../../certification';
import { Provider } from '../../provider';



@Component({
  selector: 'base-providerCertification-index',
  templateUrl: './providerCertification.hub.html',
  styleUrls: ['./providerCertification.hub.scss'],
  providers: [ProviderCertification_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ProviderCertificationEditUI,
    ProviderCertificationDeleteUI,
    LookupComponent,
  ]
})
export class ProviderCertificationHubUI extends HubUI<ProviderCertification> implements IHubUI<ProviderCertification> {

  constructor(public override service: ProviderCertification_Service = inject(ProviderCertification_Service)) {
    super(service);
    this.certificationLinker = new ForeignkeyLinker<Certification>(this.service.certificationService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Certification', () => this.navigateToUrl('/base/certification')),
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
		];
  }

  public certificationLinker: ForeignkeyLinker<Certification>;

	public providerLinker: ForeignkeyLinker<Provider>;

  

}
