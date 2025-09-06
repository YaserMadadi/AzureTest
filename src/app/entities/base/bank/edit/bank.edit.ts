

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Bank, Bank_Service } from '..';



@Component({
  selector: 'base-bank-edit',
  templateUrl: './bank.edit.html',
  styleUrls: ['./bank.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class BankEditUI extends EditUI<Bank> {
    
  constructor(public override service: Bank_Service = inject(Bank_Service )) {
    super(service); 
    
  }

  

  

}
