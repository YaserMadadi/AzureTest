

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ClientReview, ClientReview_Service } from '..';
import { Client } from '../../client';
import { Provider } from '../../provider';



@Component({
  selector: 'base-clientReview-edit',
  templateUrl: './clientReview.edit.html',
  styleUrls: ['./clientReview.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ClientReviewEditUI extends EditUI<ClientReview> {
    
  constructor(public override service: ClientReview_Service = inject(ClientReview_Service )) {
    super(service); 
    this.clientLinker = new ForeignkeyLinker<Client>(this.service.clientService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
  }

  @Input() 
  set clientLocked(value: boolean) {
    this.clientLinker.locked = value;
  }

	@Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

  public clientLinker: ForeignkeyLinker<Client>;

	public providerLinker: ForeignkeyLinker<Provider>;

}
