

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ProviderBankAccount } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderBankAccount_Builder extends ServiceBuilder<ProviderBankAccount> implements IServiceBuilder<ProviderBankAccount> {

  constructor() {
        super();
    }

  
  BuildInstance(): ProviderBankAccount;
  BuildInstance(id: number): ProviderBankAccount;
  BuildInstance(id: number, descriptor: string): ProviderBankAccount;
  BuildInstance(id: number = 0, descriptor: string = ''): ProviderBankAccount {
    return new ProviderBankAccount(id, descriptor);
  }

  BuildSeekInstance(): ProviderBankAccount {
    return ProviderBankAccount_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ProviderBankAccount {
    let providerBankAccount = new ProviderBankAccount();
    providerBankAccount.provider = undefined;
		providerBankAccount.bank = undefined;
		providerBankAccount.isActive = undefined;
    return providerBankAccount;
  }
}