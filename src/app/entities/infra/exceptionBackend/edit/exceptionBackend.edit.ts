

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ExceptionBackend, ExceptionBackend_Service } from '..';



@Component({
  selector: 'infra-exceptionBackend-edit',
  templateUrl: './exceptionBackend.edit.html',
  styleUrls: ['./exceptionBackend.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class ExceptionBackendEditUI extends EditUI<ExceptionBackend> {
    
  constructor(public override service: ExceptionBackend_Service = inject(ExceptionBackend_Service )) {
    super(service); 
    
  }

  

  

}
