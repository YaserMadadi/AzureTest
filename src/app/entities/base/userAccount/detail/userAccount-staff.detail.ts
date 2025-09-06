
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { UserAccount, UserAccount_ServiceCollection } from '../../../base/userAccount';
import { Staff, Staff_Builder } from '../../../admin/staff';
import { StaffEditUI } from '../../../admin/staff/edit/staff.edit'
import { StaffDeleteUI } from '../../../admin/staff/delete/staff.delete'
import { Gender, Gender_Service } from '../../gender';



@Component({
  selector: 'base-userAccount-staff-detail',
  templateUrl: './userAccount-staff.detail.html',
  styleUrls: ['./userAccount-staff.detail.scss'],
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
export class UserAccount_Staff_DetailUI extends DetailUI<UserAccount, Staff> {

  constructor(private serviceCollection: UserAccount_ServiceCollection = inject(UserAccount_ServiceCollection)) {
    super(serviceCollection.CollectionOfStaff.bind(serviceCollection), inject(Staff_Builder));
    this.currentInstance = new Staff();
  }

  @Input()
  public set userAccount(value: UserAccount) {
    this.masterInstance = { ...value };
    //this.currentInstance.userAccount = { ...value };
    this.sourceInstance.userAccount = { ...value };
  }

  public genderLinker: ForeignkeyLinker<Gender> = new ForeignkeyLinker<Gender>(inject(Gender_Service), true);

		

}
