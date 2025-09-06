

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ServicePrice, ServicePrice_Service } from '..';


@Component({
  selector: 'base-servicePrice-delete',
  templateUrl: './servicePrice.delete.html',
  styleUrls: ['./servicePrice.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ServicePriceDeleteUI extends DeleteUI<ServicePrice> implements IDeleteUI<ServicePrice> {

  constructor() {
    super(inject(ServicePrice_Service));
  }

}
