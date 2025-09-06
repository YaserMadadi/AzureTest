
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Client, Client_ServiceCollection } from '../../client';
import { ClientReview, ClientReview_Builder } from '../../clientReview';
import { ClientReviewEditUI } from '../../clientReview/edit/clientReview.edit'
import { ClientReviewDeleteUI } from '../../clientReview/delete/clientReview.delete'
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-client-clientReview-detail',
  templateUrl: './client-clientReview.detail.html',
  styleUrls: ['./client-clientReview.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ClientReviewEditUI,        
    ClientReviewDeleteUI,
  ]
}) 
export class Client_ClientReview_DetailUI extends DetailUI<Client, ClientReview> {

  constructor(private serviceCollection: Client_ServiceCollection = inject(Client_ServiceCollection)) {
    super(serviceCollection.CollectionOfClientReview.bind(serviceCollection), inject(ClientReview_Builder));
    this.currentInstance = new ClientReview();
  }

  @Input()
  public set client(value: Client) {
    this.masterInstance = { ...value };
    //this.currentInstance.client = { ...value };
    this.sourceInstance.client = { ...value };
  }

  public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
