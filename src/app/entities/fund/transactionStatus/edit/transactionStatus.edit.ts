

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { TransactionStatus, TransactionStatus_Service } from '..';



@Component({
  selector: 'fund-transactionStatus-edit',
  templateUrl: './transactionStatus.edit.html',
  styleUrls: ['./transactionStatus.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class TransactionStatusEditUI extends EditUI<TransactionStatus> {
    
  constructor(public override service: TransactionStatus_Service = inject(TransactionStatus_Service )) {
    super(service); 
    
  }

  

  

}
