

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Provider, Provider_Service } from '..';
import { ProviderType } from '../../providerType';
import { UserAccount } from '../../userAccount';



@Component({
  selector: 'base-provider-edit',
  templateUrl: './provider.edit.html',
  styleUrls: ['./provider.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ProviderEditUI extends EditUI<Provider> {
    
  constructor(public override service: Provider_Service = inject(Provider_Service )) {
    super(service); 
    this.providerTypeLinker = new ForeignkeyLinker<ProviderType>(this.service.providerTypeService, true);
		this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);
  }

  @Input() 
  set providerTypeLocked(value: boolean) {
    this.providerTypeLinker.locked = value;
  }

	@Input() 
  set userAccountLocked(value: boolean) {
    this.userAccountLinker.locked = value;
  }

  public providerTypeLinker: ForeignkeyLinker<ProviderType>;

	public userAccountLinker: ForeignkeyLinker<UserAccount>;

}
