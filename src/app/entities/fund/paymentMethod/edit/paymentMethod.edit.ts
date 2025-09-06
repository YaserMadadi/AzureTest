

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { PaymentMethod, PaymentMethod_Service } from '..';



@Component({
  selector: 'fund-paymentMethod-edit',
  templateUrl: './paymentMethod.edit.html',
  styleUrls: ['./paymentMethod.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class PaymentMethodEditUI extends EditUI<PaymentMethod> {
    
  constructor(public override service: PaymentMethod_Service = inject(PaymentMethod_Service )) {
    super(service); 
    
  }

  

  

}
