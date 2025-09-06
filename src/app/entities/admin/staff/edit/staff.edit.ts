

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Staff, Staff_Service } from '..';
import { Gender } from '../../../base/gender';
import { UserAccount } from '../../../base/userAccount';



@Component({
  selector: 'admin-staff-edit',
  templateUrl: './staff.edit.html',
  styleUrls: ['./staff.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class StaffEditUI extends EditUI<Staff> {
    
  constructor(public override service: Staff_Service = inject(Staff_Service )) {
    super(service); 
    this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, true);
		this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);
  }

  @Input() 
  set genderLocked(value: boolean) {
    this.genderLinker.locked = value;
  }

	@Input() 
  set userAccountLocked(value: boolean) {
    this.userAccountLinker.locked = value;
  }

  public genderLinker: ForeignkeyLinker<Gender>;

	public userAccountLinker: ForeignkeyLinker<UserAccount>;

}
