

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ClientReview, ClientReview_Service } from '..';
import { ClientReviewEditUI } from '../edit/clientReview.edit'
import { ClientReviewDeleteUI } from '../delete/clientReview.delete'
import { Client } from '../../client';
import { Provider } from '../../provider';



@Component({
  selector: 'base-clientReview-index',
  templateUrl: './clientReview.hub.html',
  styleUrls: ['./clientReview.hub.scss'],
  providers: [ClientReview_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ClientReviewEditUI,
    ClientReviewDeleteUI,
    LookupComponent,
  ]
})
export class ClientReviewHubUI extends HubUI<ClientReview> implements IHubUI<ClientReview> {

  constructor(public override service: ClientReview_Service = inject(ClientReview_Service)) {
    super(service);
    this.clientLinker = new ForeignkeyLinker<Client>(this.service.clientService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Client', () => this.navigateToUrl('/base/client')),
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
		];
  }

  public clientLinker: ForeignkeyLinker<Client>;

	public providerLinker: ForeignkeyLinker<Provider>;

  

}
