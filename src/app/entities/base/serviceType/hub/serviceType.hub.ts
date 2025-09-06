

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ServiceType, ServiceType_Service } from '..';
import { ServiceTypeEditUI } from '../edit/serviceType.edit'
import { ServiceTypeDeleteUI } from '../delete/serviceType.delete'
import { ProviderService } from '../../providerService';
import { ProviderServiceEditUI } from '../../providerService/edit/providerService.edit';



@Component({
  selector: 'base-serviceType-index',
  templateUrl: './serviceType.hub.html',
  styleUrls: ['./serviceType.hub.scss'],
  providers: [ServiceType_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ServiceTypeEditUI,
    ServiceTypeDeleteUI,
    ProviderServiceEditUI,
  ]
})
export class ServiceTypeHubUI extends HubUI<ServiceType> implements IHubUI<ServiceType> {

  constructor(public override service: ServiceType_Service = inject(ServiceType_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Provider Service', () => this.onAddProviderService()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('providerServiceEditUI')
  public providerServiceEditUI!: ProviderServiceEditUI;

  onAddProviderService() {
    let providerService = new ProviderService();
    providerService.serviceType = this.currentInstance;
    this.providerServiceEditUI.Show(providerService);
  }


}
