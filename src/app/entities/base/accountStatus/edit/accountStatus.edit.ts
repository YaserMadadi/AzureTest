

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { AccountStatus, AccountStatus_Service } from '..';



@Component({
  selector: 'base-accountStatus-edit',
  templateUrl: './accountStatus.edit.html',
  styleUrls: ['./accountStatus.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class AccountStatusEditUI extends EditUI<AccountStatus> {
    
  constructor(public override service: AccountStatus_Service = inject(AccountStatus_Service )) {
    super(service); 
    
  }

  

  

}
