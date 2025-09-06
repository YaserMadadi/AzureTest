

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ProviderService, ProviderService_Service } from '..';


@Component({
  selector: 'base-providerService-delete',
  templateUrl: './providerService.delete.html',
  styleUrls: ['./providerService.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ProviderServiceDeleteUI extends DeleteUI<ProviderService> implements IDeleteUI<ProviderService> {

  constructor() {
    super(inject(ProviderService_Service));
  }

}
