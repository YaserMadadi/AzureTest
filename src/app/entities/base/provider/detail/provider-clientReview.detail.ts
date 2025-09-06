
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../provider';
import { ClientReview, ClientReview_Builder } from '../../clientReview';
import { ClientReviewEditUI } from '../../clientReview/edit/clientReview.edit'
import { ClientReviewDeleteUI } from '../../clientReview/delete/clientReview.delete'
import { Client, Client_Service } from '../../client';



@Component({
  selector: 'base-provider-clientReview-detail',
  templateUrl: './provider-clientReview.detail.html',
  styleUrls: ['./provider-clientReview.detail.scss'],
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
export class Provider_ClientReview_DetailUI extends DetailUI<Provider, ClientReview> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfClientReview.bind(serviceCollection), inject(ClientReview_Builder));
    this.currentInstance = new ClientReview();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  public clientLinker: ForeignkeyLinker<Client> = new ForeignkeyLinker<Client>(inject(Client_Service), true);

		

}
