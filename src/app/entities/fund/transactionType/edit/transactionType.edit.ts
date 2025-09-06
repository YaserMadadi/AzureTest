

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { TransactionType, TransactionType_Service } from '..';



@Component({
  selector: 'fund-transactionType-edit',
  templateUrl: './transactionType.edit.html',
  styleUrls: ['./transactionType.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class TransactionTypeEditUI extends EditUI<TransactionType> {
    
  constructor(public override service: TransactionType_Service = inject(TransactionType_Service )) {
    super(service); 
    
  }

  

  

}
