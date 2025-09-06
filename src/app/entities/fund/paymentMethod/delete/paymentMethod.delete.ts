

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { PaymentMethod, PaymentMethod_Service } from '..';


@Component({
  selector: 'fund-paymentMethod-delete',
  templateUrl: './paymentMethod.delete.html',
  styleUrls: ['./paymentMethod.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class PaymentMethodDeleteUI extends DeleteUI<PaymentMethod> implements IDeleteUI<PaymentMethod> {

  constructor() {
    super(inject(PaymentMethod_Service));
  }

}
