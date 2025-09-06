

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ExceptionProcedure, ExceptionProcedure_Service } from '..';
import { ExceptionProcedureEditUI } from '../edit/exceptionProcedure.edit'
import { ExceptionProcedureDeleteUI } from '../delete/exceptionProcedure.delete'



@Component({
  selector: 'infra-exceptionProcedure-index',
  templateUrl: './exceptionProcedure.hub.html',
  styleUrls: ['./exceptionProcedure.hub.scss'],
  providers: [ExceptionProcedure_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ExceptionProcedureEditUI,
    ExceptionProcedureDeleteUI,
    
  ]
})
export class ExceptionProcedureHubUI extends HubUI<ExceptionProcedure> implements IHubUI<ExceptionProcedure> {

  constructor(public override service: ExceptionProcedure_Service = inject(ExceptionProcedure_Service)) {
    super(service);
    

    this.quickAddItems = [];

    this.linkedEntityItems = [
		];
  }

  

  

}
