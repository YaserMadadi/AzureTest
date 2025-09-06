

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ExceptionBackend, ExceptionBackend_Service } from '..';
import { ExceptionBackendEditUI } from '../edit/exceptionBackend.edit'
import { ExceptionBackendDeleteUI } from '../delete/exceptionBackend.delete'



@Component({
  selector: 'infra-exceptionBackend-index',
  templateUrl: './exceptionBackend.hub.html',
  styleUrls: ['./exceptionBackend.hub.scss'],
  providers: [ExceptionBackend_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ExceptionBackendEditUI,
    ExceptionBackendDeleteUI,
    
  ]
})
export class ExceptionBackendHubUI extends HubUI<ExceptionBackend> implements IHubUI<ExceptionBackend> {

  constructor(public override service: ExceptionBackend_Service = inject(ExceptionBackend_Service)) {
    super(service);
    

    this.quickAddItems = [];

    this.linkedEntityItems = [
		];
  }

  

  

}
