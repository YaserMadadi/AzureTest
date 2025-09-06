

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { PaymentMethod, PaymentMethod_Service } from '..';
import { PaymentMethodEditUI } from '../edit/paymentMethod.edit'
import { PaymentMethodDeleteUI } from '../delete/paymentMethod.delete'
import { WalletTopUp } from '../../walletTopUp';
import { WalletTopUpEditUI } from '../../walletTopUp/edit/walletTopUp.edit';



@Component({
  selector: 'fund-paymentMethod-index',
  templateUrl: './paymentMethod.hub.html',
  styleUrls: ['./paymentMethod.hub.scss'],
  providers: [PaymentMethod_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    PaymentMethodEditUI,
    PaymentMethodDeleteUI,
    WalletTopUpEditUI,
  ]
})
export class PaymentMethodHubUI extends HubUI<PaymentMethod> implements IHubUI<PaymentMethod> {

  constructor(public override service: PaymentMethod_Service = inject(PaymentMethod_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Wallet Top Up', () => this.onAddWalletTopUp()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('walletTopUpEditUI')
  public walletTopUpEditUI!: WalletTopUpEditUI;

  onAddWalletTopUp() {
    let walletTopUp = new WalletTopUp();
    walletTopUp.paymentMethod = this.currentInstance;
    this.walletTopUpEditUI.Show(walletTopUp);
  }


}
