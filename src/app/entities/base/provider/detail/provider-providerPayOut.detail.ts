
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../../base/provider';
import { ProviderPayOut, ProviderPayOut_Builder } from '../../../fund/providerPayOut';
import { ProviderPayOutEditUI } from '../../../fund/providerPayOut/edit/providerPayOut.edit'
import { ProviderPayOutDeleteUI } from '../../../fund/providerPayOut/delete/providerPayOut.delete'
import { TransactionStatus, TransactionStatus_Service } from '../../../fund/transactionStatus';



@Component({
  selector: 'base-provider-providerPayOut-detail',
  templateUrl: './provider-providerPayOut.detail.html',
  styleUrls: ['./provider-providerPayOut.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ProviderPayOutEditUI,        
    ProviderPayOutDeleteUI,
  ]
}) 
export class Provider_ProviderPayOut_DetailUI extends DetailUI<Provider, ProviderPayOut> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfProviderPayOut.bind(serviceCollection), inject(ProviderPayOut_Builder));
    this.currentInstance = new ProviderPayOut();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  public transactionStatusLinker: ForeignkeyLinker<TransactionStatus> = new ForeignkeyLinker<TransactionStatus>(inject(TransactionStatus_Service), true);

		

}
