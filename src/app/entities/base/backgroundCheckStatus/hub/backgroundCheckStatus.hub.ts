

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { BackgroundCheckStatus, BackgroundCheckStatus_Service } from '..';
import { BackgroundCheckStatusEditUI } from '../edit/backgroundCheckStatus.edit'
import { BackgroundCheckStatusDeleteUI } from '../delete/backgroundCheckStatus.delete'
import { IndividualProvider } from '../../individualProvider';
import { IndividualProviderEditUI } from '../../individualProvider/edit/individualProvider.edit';



@Component({
  selector: 'base-backgroundCheckStatus-index',
  templateUrl: './backgroundCheckStatus.hub.html',
  styleUrls: ['./backgroundCheckStatus.hub.scss'],
  providers: [BackgroundCheckStatus_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    BackgroundCheckStatusEditUI,
    BackgroundCheckStatusDeleteUI,
    IndividualProviderEditUI,
  ]
})
export class BackgroundCheckStatusHubUI extends HubUI<BackgroundCheckStatus> implements IHubUI<BackgroundCheckStatus> {

  constructor(public override service: BackgroundCheckStatus_Service = inject(BackgroundCheckStatus_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Individual Provider', () => this.onAddIndividualProvider()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('individualProviderEditUI')
  public individualProviderEditUI!: IndividualProviderEditUI;

  onAddIndividualProvider() {
    let individualProvider = new IndividualProvider();
    individualProvider.backgroundCheckStatus = this.currentInstance;
    this.individualProviderEditUI.Show(individualProvider);
  }


}
