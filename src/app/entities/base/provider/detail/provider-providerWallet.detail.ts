
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../../base/provider';
import { ProviderWallet, ProviderWallet_Builder } from '../../../fund/providerWallet';
import { ProviderWalletEditUI } from '../../../fund/providerWallet/edit/providerWallet.edit'
import { ProviderWalletDeleteUI } from '../../../fund/providerWallet/delete/providerWallet.delete'



@Component({
  selector: 'base-provider-providerWallet-detail',
  templateUrl: './provider-providerWallet.detail.html',
  styleUrls: ['./provider-providerWallet.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    
    ProviderWalletEditUI,        
    ProviderWalletDeleteUI,
  ]
}) 
export class Provider_ProviderWallet_DetailUI extends DetailUI<Provider, ProviderWallet> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfProviderWallet.bind(serviceCollection), inject(ProviderWallet_Builder));
    this.currentInstance = new ProviderWallet();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  

}
