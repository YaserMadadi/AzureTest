

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { RecordLog, RecordLog_Service } from '..';


@Component({
  selector: 'infra-recordLog-delete',
  templateUrl: './recordLog.delete.html',
  styleUrls: ['./recordLog.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class RecordLogDeleteUI extends DeleteUI<RecordLog> implements IDeleteUI<RecordLog> {

  constructor() {
    super(inject(RecordLog_Service));
  }

}
