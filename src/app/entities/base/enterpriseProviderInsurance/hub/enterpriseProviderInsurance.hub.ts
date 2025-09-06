

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { EnterpriseProviderInsurance, EnterpriseProviderInsurance_Service } from '..';
import { EnterpriseProviderInsuranceEditUI } from '../edit/enterpriseProviderInsurance.edit'
import { EnterpriseProviderInsuranceDeleteUI } from '../delete/enterpriseProviderInsurance.delete'
import { EnterpriseProvider } from '../../enterpriseProvider';



@Component({
  selector: 'base-enterpriseProviderInsurance-index',
  templateUrl: './enterpriseProviderInsurance.hub.html',
  styleUrls: ['./enterpriseProviderInsurance.hub.scss'],
  providers: [EnterpriseProviderInsurance_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    EnterpriseProviderInsuranceEditUI,
    EnterpriseProviderInsuranceDeleteUI,
    LookupComponent,
  ]
})
export class EnterpriseProviderInsuranceHubUI extends HubUI<EnterpriseProviderInsurance> implements IHubUI<EnterpriseProviderInsurance> {

  constructor(public override service: EnterpriseProviderInsurance_Service = inject(EnterpriseProviderInsurance_Service)) {
    super(service);
    this.enterpriseProviderLinker = new ForeignkeyLinker<EnterpriseProvider>(this.service.enterpriseProviderService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Enterprise Provider', () => this.navigateToUrl('/base/enterpriseProvider')),
		];
  }

  public enterpriseProviderLinker: ForeignkeyLinker<EnterpriseProvider>;

  

}
