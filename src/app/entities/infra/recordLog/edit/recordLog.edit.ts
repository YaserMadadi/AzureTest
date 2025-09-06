

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { RecordLog, RecordLog_Service } from '..';



@Component({
  selector: 'infra-recordLog-edit',
  templateUrl: './recordLog.edit.html',
  styleUrls: ['./recordLog.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class RecordLogEditUI extends EditUI<RecordLog> {
    
  constructor(public override service: RecordLog_Service = inject(RecordLog_Service )) {
    super(service); 
    
  }

  

  

}
