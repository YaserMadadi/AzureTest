

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ClientReview, ClientReview_Service } from '..';


@Component({
  selector: 'base-clientReview-delete',
  templateUrl: './clientReview.delete.html',
  styleUrls: ['./clientReview.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ClientReviewDeleteUI extends DeleteUI<ClientReview> implements IDeleteUI<ClientReview> {

  constructor() {
    super(inject(ClientReview_Service));
  }

}
