import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ClientReview, ClientReview_Service } from '..';



@Component({
  selector: 'base-clientReview-master',
  templateUrl: './clientReview.master.html',
  styleUrls: ['./clientReview.master.scss'],
  providers: [
    ClientReview_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ClientReviewEditUI,        
    //ClientReviewDeleteUI,
    // No Item...
  ]
})
export class ClientReviewMasterUI extends MasterUI<ClientReview> implements IMasterUI<ClientReview> {

  constructor() {
    super(inject(ClientReview_Service))
  }


}
