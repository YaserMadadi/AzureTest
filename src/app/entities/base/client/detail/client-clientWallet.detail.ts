
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Client, Client_ServiceCollection } from '../../../base/client';
import { ClientWallet, ClientWallet_Builder } from '../../../fund/clientWallet';
import { ClientWalletEditUI } from '../../../fund/clientWallet/edit/clientWallet.edit'
import { ClientWalletDeleteUI } from '../../../fund/clientWallet/delete/clientWallet.delete'



@Component({
  selector: 'base-client-clientWallet-detail',
  templateUrl: './client-clientWallet.detail.html',
  styleUrls: ['./client-clientWallet.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    
    ClientWalletEditUI,        
    ClientWalletDeleteUI,
  ]
}) 
export class Client_ClientWallet_DetailUI extends DetailUI<Client, ClientWallet> {

  constructor(private serviceCollection: Client_ServiceCollection = inject(Client_ServiceCollection)) {
    super(serviceCollection.CollectionOfClientWallet.bind(serviceCollection), inject(ClientWallet_Builder));
    this.currentInstance = new ClientWallet();
  }

  @Input()
  public set client(value: Client) {
    this.masterInstance = { ...value };
    //this.currentInstance.client = { ...value };
    this.sourceInstance.client = { ...value };
  }

  

}
