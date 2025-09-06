import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ExceptionBackend, ExceptionBackend_Service } from '..';



@Component({
  selector: 'infra-exceptionBackend-master',
  templateUrl: './exceptionBackend.master.html',
  styleUrls: ['./exceptionBackend.master.scss'],
  providers: [
    ExceptionBackend_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ExceptionBackendEditUI,        
    //ExceptionBackendDeleteUI,
    // No Item...
  ]
})
export class ExceptionBackendMasterUI extends MasterUI<ExceptionBackend> implements IMasterUI<ExceptionBackend> {

  constructor() {
    super(inject(ExceptionBackend_Service))
  }


}
