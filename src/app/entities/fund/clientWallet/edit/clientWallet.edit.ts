

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ClientWallet, ClientWallet_Service } from '..';
import { Client } from '../../../base/client';



@Component({
  selector: 'fund-clientWallet-edit',
  templateUrl: './clientWallet.edit.html',
  styleUrls: ['./clientWallet.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ClientWalletEditUI extends EditUI<ClientWallet> {
    
  constructor(public override service: ClientWallet_Service = inject(ClientWallet_Service )) {
    super(service); 
    this.clientLinker = new ForeignkeyLinker<Client>(this.service.clientService, true);
  }

  @Input() 
  set clientLocked(value: boolean) {
    this.clientLinker.locked = value;
  }

  public clientLinker: ForeignkeyLinker<Client>;

}
