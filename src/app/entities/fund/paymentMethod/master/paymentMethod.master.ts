import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { PaymentMethod, PaymentMethod_Service } from '..';
import { PaymentMethod_WalletTopUp_DetailUI } from '../detail/paymentMethod-walletTopUp.detail';



@Component({
  selector: 'fund-paymentMethod-master',
  templateUrl: './paymentMethod.master.html',
  styleUrls: ['./paymentMethod.master.scss'],
  providers: [
    PaymentMethod_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //PaymentMethodEditUI,        
    //PaymentMethodDeleteUI,
    PaymentMethod_WalletTopUp_DetailUI
  ]
})
export class PaymentMethodMasterUI extends MasterUI<PaymentMethod> implements IMasterUI<PaymentMethod> {

  constructor() {
    super(inject(PaymentMethod_Service))
  }


}
