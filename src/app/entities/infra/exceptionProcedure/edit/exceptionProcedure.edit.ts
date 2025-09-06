

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ExceptionProcedure, ExceptionProcedure_Service } from '..';



@Component({
  selector: 'infra-exceptionProcedure-edit',
  templateUrl: './exceptionProcedure.edit.html',
  styleUrls: ['./exceptionProcedure.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class ExceptionProcedureEditUI extends EditUI<ExceptionProcedure> {
    
  constructor(public override service: ExceptionProcedure_Service = inject(ExceptionProcedure_Service )) {
    super(service); 
    
  }

  

  

}
