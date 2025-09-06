

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { UserType, UserType_Service } from '..';



@Component({
  selector: 'admin-userType-edit',
  templateUrl: './userType.edit.html',
  styleUrls: ['./userType.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class UserTypeEditUI extends EditUI<UserType> {
    
  constructor(public override service: UserType_Service = inject(UserType_Service )) {
    super(service); 
    
  }

  

  

}
