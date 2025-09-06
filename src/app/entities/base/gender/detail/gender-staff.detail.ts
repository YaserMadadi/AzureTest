
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Gender, Gender_ServiceCollection } from '../../../base/gender';
import { Staff, Staff_Builder } from '../../../admin/staff';
import { StaffEditUI } from '../../../admin/staff/edit/staff.edit'
import { StaffDeleteUI } from '../../../admin/staff/delete/staff.delete'
import { UserAccount, UserAccount_Service } from '../../userAccount';



@Component({
  selector: 'base-gender-staff-detail',
  templateUrl: './gender-staff.detail.html',
  styleUrls: ['./gender-staff.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    StaffEditUI,        
    StaffDeleteUI,
  ]
}) 
export class Gender_Staff_DetailUI extends DetailUI<Gender, Staff> {

  constructor(private serviceCollection: Gender_ServiceCollection = inject(Gender_ServiceCollection)) {
    super(serviceCollection.CollectionOfStaff.bind(serviceCollection), inject(Staff_Builder));
    this.currentInstance = new Staff();
  }

  @Input()
  public set gender(value: Gender) {
    this.masterInstance = { ...value };
    //this.currentInstance.gender = { ...value };
    this.sourceInstance.gender = { ...value };
  }

  public userAccountLinker: ForeignkeyLinker<UserAccount> = new ForeignkeyLinker<UserAccount>(inject(UserAccount_Service), true);

		

}
