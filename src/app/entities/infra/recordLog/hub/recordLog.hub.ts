

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { RecordLog, RecordLog_Service } from '..';
import { RecordLogEditUI } from '../edit/recordLog.edit'
import { RecordLogDeleteUI } from '../delete/recordLog.delete'



@Component({
  selector: 'infra-recordLog-index',
  templateUrl: './recordLog.hub.html',
  styleUrls: ['./recordLog.hub.scss'],
  providers: [RecordLog_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    RecordLogEditUI,
    RecordLogDeleteUI,
    
  ]
})
export class RecordLogHubUI extends HubUI<RecordLog> implements IHubUI<RecordLog> {

  constructor(public override service: RecordLog_Service = inject(RecordLog_Service)) {
    super(service);
    

    this.quickAddItems = [];

    this.linkedEntityItems = [
		];
  }

  

  

}
