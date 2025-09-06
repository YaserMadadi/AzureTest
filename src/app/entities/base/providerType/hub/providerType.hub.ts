

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ProviderType, ProviderType_Service } from '..';
import { ProviderTypeEditUI } from '../edit/providerType.edit'
import { ProviderTypeDeleteUI } from '../delete/providerType.delete'
import { Provider } from '../../provider';
import { ProviderEditUI } from '../../provider/edit/provider.edit';



@Component({
  selector: 'base-providerType-index',
  templateUrl: './providerType.hub.html',
  styleUrls: ['./providerType.hub.scss'],
  providers: [ProviderType_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ProviderTypeEditUI,
    ProviderTypeDeleteUI,
    ProviderEditUI,
  ]
})
export class ProviderTypeHubUI extends HubUI<ProviderType> implements IHubUI<ProviderType> {

  constructor(public override service: ProviderType_Service = inject(ProviderType_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Provider', () => this.onAddProvider()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('providerEditUI')
  public providerEditUI!: ProviderEditUI;

  onAddProvider() {
    let provider = new Provider();
    provider.providerType = this.currentInstance;
    this.providerEditUI.Show(provider);
  }


}
