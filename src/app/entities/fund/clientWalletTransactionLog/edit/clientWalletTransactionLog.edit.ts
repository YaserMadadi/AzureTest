

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ClientWalletTransactionLog, ClientWalletTransactionLog_Service } from '..';
import { ClientWallet } from '../../clientWallet';
import { TransactionType } from '../../transactionType';
import { TransactionStatus } from '../../transactionStatus';



@Component({
  selector: 'fund-clientWalletTransactionLog-edit',
  templateUrl: './clientWalletTransactionLog.edit.html',
  styleUrls: ['./clientWalletTransactionLog.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ClientWalletTransactionLogEditUI extends EditUI<ClientWalletTransactionLog> {
    
  constructor(public override service: ClientWalletTransactionLog_Service = inject(ClientWalletTransactionLog_Service )) {
    super(service); 
    this.clientWalletLinker = new ForeignkeyLinker<ClientWallet>(this.service.clientWalletService, true);
		this.transactionTypeLinker = new ForeignkeyLinker<TransactionType>(this.service.transactionTypeService, true);
		this.transactionStatusLinker = new ForeignkeyLinker<TransactionStatus>(this.service.transactionStatusService, true);
  }

  @Input() 
  set clientWalletLocked(value: boolean) {
    this.clientWalletLinker.locked = value;
  }

	@Input() 
  set transactionTypeLocked(value: boolean) {
    this.transactionTypeLinker.locked = value;
  }

	@Input() 
  set transactionStatusLocked(value: boolean) {
    this.transactionStatusLinker.locked = value;
  }

  public clientWalletLinker: ForeignkeyLinker<ClientWallet>;

	public transactionTypeLinker: ForeignkeyLinker<TransactionType>;

	public transactionStatusLinker: ForeignkeyLinker<TransactionStatus>;

}
