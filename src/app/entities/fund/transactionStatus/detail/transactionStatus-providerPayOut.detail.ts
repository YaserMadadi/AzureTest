
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { TransactionStatus, TransactionStatus_ServiceCollection } from '../../transactionStatus';
import { ProviderPayOut, ProviderPayOut_Builder } from '../../providerPayOut';
import { ProviderPayOutEditUI } from '../../providerPayOut/edit/providerPayOut.edit'
import { ProviderPayOutDeleteUI } from '../../providerPayOut/delete/providerPayOut.delete'
import { Provider, Provider_Service } from '../../../base/provider';



@Component({
  selector: 'fund-transactionStatus-providerPayOut-detail',
  templateUrl: './transactionStatus-providerPayOut.detail.html',
  styleUrls: ['./transactionStatus-providerPayOut.detail.scss'],
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
export class TransactionStatus_ProviderPayOut_DetailUI extends DetailUI<TransactionStatus, ProviderPayOut> {

  constructor(private serviceCollection: TransactionStatus_ServiceCollection = inject(TransactionStatus_ServiceCollection)) {
    super(serviceCollection.CollectionOfProviderPayOut.bind(serviceCollection), inject(ProviderPayOut_Builder));
    this.currentInstance = new ProviderPayOut();
  }

  @Input()
  public set transactionStatus(value: TransactionStatus) {
    this.masterInstance = { ...value };
    //this.currentInstance.transactionStatus = { ...value };
    this.sourceInstance.transactionStatus = { ...value };
  }

  public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
