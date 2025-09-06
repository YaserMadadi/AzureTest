

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { IndividualProvider, IndividualProvider_Service } from '..';
import { BackgroundCheckStatus } from '../../backgroundCheckStatus';
import { Gender } from '../../gender';
import { Provider } from '../../provider';
import { ProviderType } from '../../providerType';
import { UserAccount } from '../../userAccount';



@Component({
  selector: 'base-individualProvider-edit',
  templateUrl: './individualProvider.edit.html',
  styleUrls: ['./individualProvider.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class IndividualProviderEditUI extends EditUI<IndividualProvider> {
    
  constructor(public override service: IndividualProvider_Service = inject(IndividualProvider_Service )) {
    super(service); 
    this.providerTypeLinker = new ForeignkeyLinker<ProviderType>(this.service.providerTypeService, true);
		this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);
		this.backgroundCheckStatusLinker = new ForeignkeyLinker<BackgroundCheckStatus>(this.service.backgroundCheckStatusService, true);
		this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, true);
  }

  @Input() 
  set backgroundCheckStatusLocked(value: boolean) {
    this.backgroundCheckStatusLinker.locked = value;
  }

	@Input() 
  set genderLocked(value: boolean) {
    this.genderLinker.locked = value;
  }

  public providerTypeLinker: ForeignkeyLinker<ProviderType>;

	public userAccountLinker: ForeignkeyLinker<UserAccount>;

	public backgroundCheckStatusLinker: ForeignkeyLinker<BackgroundCheckStatus>;

	public genderLinker: ForeignkeyLinker<Gender>;

}
