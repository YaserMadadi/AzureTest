

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ProviderBankAccount, ProviderBankAccount_Service } from '..';


@Component({
  selector: 'base-providerBankAccount-delete',
  templateUrl: './providerBankAccount.delete.html',
  styleUrls: ['./providerBankAccount.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ProviderBankAccountDeleteUI extends DeleteUI<ProviderBankAccount> implements IDeleteUI<ProviderBankAccount> {

  constructor() {
    super(inject(ProviderBankAccount_Service));
  }

}
