

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { WalletTopUp, WalletTopUp_Service } from '..';
import { ClientWallet } from '../../clientWallet';
import { PaymentMethod } from '../../paymentMethod';
import { TransactionStatus } from '../../transactionStatus';



@Component({
  selector: 'fund-walletTopUp-edit',
  templateUrl: './walletTopUp.edit.html',
  styleUrls: ['./walletTopUp.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class WalletTopUpEditUI extends EditUI<WalletTopUp> {
    
  constructor(public override service: WalletTopUp_Service = inject(WalletTopUp_Service )) {
    super(service); 
    this.clientWalletLinker = new ForeignkeyLinker<ClientWallet>(this.service.clientWalletService, true);
		this.paymentMethodLinker = new ForeignkeyLinker<PaymentMethod>(this.service.paymentMethodService, true);
		this.transactionStatusLinker = new ForeignkeyLinker<TransactionStatus>(this.service.transactionStatusService, true);
  }

  @Input() 
  set clientWalletLocked(value: boolean) {
    this.clientWalletLinker.locked = value;
  }

	@Input() 
  set paymentMethodLocked(value: boolean) {
    this.paymentMethodLinker.locked = value;
  }

	@Input() 
  set transactionStatusLocked(value: boolean) {
    this.transactionStatusLinker.locked = value;
  }

  public clientWalletLinker: ForeignkeyLinker<ClientWallet>;

	public paymentMethodLinker: ForeignkeyLinker<PaymentMethod>;

	public transactionStatusLinker: ForeignkeyLinker<TransactionStatus>;

}
