

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Client, Client_Service } from '..';
import { City } from '../../city';
import { Gender } from '../../gender';
import { VerificationStatus } from '../../verificationStatus';
import { UserAccount } from '../../userAccount';



@Component({
  selector: 'base-client-edit',
  templateUrl: './client.edit.html',
  styleUrls: ['./client.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ClientEditUI extends EditUI<Client> {
    
  constructor(public override service: Client_Service = inject(Client_Service )) {
    super(service); 
    this.cityLinker = new ForeignkeyLinker<City>(this.service.cityService, true);
		this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, true);
		this.phoneVerificationStatusLinker = new ForeignkeyLinker<VerificationStatus>(this.service.verificationStatusService, true);
		this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);
  }

  @Input() 
  set cityLocked(value: boolean) {
    this.cityLinker.locked = value;
  }

	@Input() 
  set genderLocked(value: boolean) {
    this.genderLinker.locked = value;
  }

	@Input() 
  set phoneVerificationStatusLocked(value: boolean) {
    this.phoneVerificationStatusLinker.locked = value;
  }

	@Input() 
  set userAccountLocked(value: boolean) {
    this.userAccountLinker.locked = value;
  }

  public cityLinker: ForeignkeyLinker<City>;

	public genderLinker: ForeignkeyLinker<Gender>;

	public phoneVerificationStatusLinker: ForeignkeyLinker<VerificationStatus>;

	public userAccountLinker: ForeignkeyLinker<UserAccount>;

}
