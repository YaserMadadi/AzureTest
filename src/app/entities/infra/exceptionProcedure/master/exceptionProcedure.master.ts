import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ExceptionProcedure, ExceptionProcedure_Service } from '..';



@Component({
  selector: 'infra-exceptionProcedure-master',
  templateUrl: './exceptionProcedure.master.html',
  styleUrls: ['./exceptionProcedure.master.scss'],
  providers: [
    ExceptionProcedure_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ExceptionProcedureEditUI,        
    //ExceptionProcedureDeleteUI,
    // No Item...
  ]
})
export class ExceptionProcedureMasterUI extends MasterUI<ExceptionProcedure> implements IMasterUI<ExceptionProcedure> {

  constructor() {
    super(inject(ExceptionProcedure_Service))
  }


}
