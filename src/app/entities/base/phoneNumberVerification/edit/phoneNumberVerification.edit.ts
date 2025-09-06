

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { PhoneNumberVerification, PhoneNumberVerification_Service } from '..';
import { Client } from '../../client';
import { VerificationStatus } from '../../verificationStatus';



@Component({
  selector: 'base-phoneNumberVerification-edit',
  templateUrl: './phoneNumberVerification.edit.html',
  styleUrls: ['./phoneNumberVerification.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class PhoneNumberVerificationEditUI extends EditUI<PhoneNumberVerification> {
    
  constructor(public override service: PhoneNumberVerification_Service = inject(PhoneNumberVerification_Service )) {
    super(service); 
    this.clientLinker = new ForeignkeyLinker<Client>(this.service.clientService, true);
		this.verificationStatusLinker = new ForeignkeyLinker<VerificationStatus>(this.service.verificationStatusService, true);
  }

  @Input() 
  set clientLocked(value: boolean) {
    this.clientLinker.locked = value;
  }

	@Input() 
  set verificationStatusLocked(value: boolean) {
    this.verificationStatusLinker.locked = value;
  }

  public clientLinker: ForeignkeyLinker<Client>;

	public verificationStatusLinker: ForeignkeyLinker<VerificationStatus>;

}
