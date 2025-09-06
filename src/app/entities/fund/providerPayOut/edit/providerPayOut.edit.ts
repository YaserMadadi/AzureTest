

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ProviderPayOut, ProviderPayOut_Service } from '..';
import { Provider } from '../../../base/provider';
import { TransactionStatus } from '../../transactionStatus';



@Component({
  selector: 'fund-providerPayOut-edit',
  templateUrl: './providerPayOut.edit.html',
  styleUrls: ['./providerPayOut.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ProviderPayOutEditUI extends EditUI<ProviderPayOut> {
    
  constructor(public override service: ProviderPayOut_Service = inject(ProviderPayOut_Service )) {
    super(service); 
    this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
		this.transactionStatusLinker = new ForeignkeyLinker<TransactionStatus>(this.service.transactionStatusService, true);
  }

  @Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

	@Input() 
  set transactionStatusLocked(value: boolean) {
    this.transactionStatusLinker.locked = value;
  }

  public providerLinker: ForeignkeyLinker<Provider>;

	public transactionStatusLinker: ForeignkeyLinker<TransactionStatus>;

}
