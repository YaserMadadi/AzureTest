

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ProviderWallet, ProviderWallet_Service } from '..';
import { Provider } from '../../../base/provider';



@Component({
  selector: 'fund-providerWallet-edit',
  templateUrl: './providerWallet.edit.html',
  styleUrls: ['./providerWallet.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ProviderWalletEditUI extends EditUI<ProviderWallet> {
    
  constructor(public override service: ProviderWallet_Service = inject(ProviderWallet_Service )) {
    super(service); 
    this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
  }

  @Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

  public providerLinker: ForeignkeyLinker<Provider>;

}
