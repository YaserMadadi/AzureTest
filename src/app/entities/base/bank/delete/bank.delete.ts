

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Bank, Bank_Service } from '..';


@Component({
  selector: 'base-bank-delete',
  templateUrl: './bank.delete.html',
  styleUrls: ['./bank.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class BankDeleteUI extends DeleteUI<Bank> implements IDeleteUI<Bank> {

  constructor() {
    super(inject(Bank_Service));
  }

}
