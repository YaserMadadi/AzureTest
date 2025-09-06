

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ProviderBankAccount, ProviderBankAccount_Service } from '..';
import { Bank } from '../../bank';
import { Provider } from '../../provider';



@Component({
  selector: 'base-providerBankAccount-edit',
  templateUrl: './providerBankAccount.edit.html',
  styleUrls: ['./providerBankAccount.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ProviderBankAccountEditUI extends EditUI<ProviderBankAccount> {
    
  constructor(public override service: ProviderBankAccount_Service = inject(ProviderBankAccount_Service )) {
    super(service); 
    this.bankLinker = new ForeignkeyLinker<Bank>(this.service.bankService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
  }

  @Input() 
  set bankLocked(value: boolean) {
    this.bankLinker.locked = value;
  }

	@Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

  public bankLinker: ForeignkeyLinker<Bank>;

	public providerLinker: ForeignkeyLinker<Provider>;

}
