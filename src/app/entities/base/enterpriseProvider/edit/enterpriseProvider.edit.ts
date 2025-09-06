

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { EnterpriseProvider, EnterpriseProvider_Service } from '..';
import { Provider } from '../../provider';
import { ProviderType } from '../../providerType';
import { UserAccount } from '../../userAccount';



@Component({
  selector: 'base-enterpriseProvider-edit',
  templateUrl: './enterpriseProvider.edit.html',
  styleUrls: ['./enterpriseProvider.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class EnterpriseProviderEditUI extends EditUI<EnterpriseProvider> {
    
  constructor(public override service: EnterpriseProvider_Service = inject(EnterpriseProvider_Service )) {
    super(service); 
    this.providerTypeLinker = new ForeignkeyLinker<ProviderType>(this.service.providerTypeService, true);
		this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);
  }

  

  public providerTypeLinker: ForeignkeyLinker<ProviderType>;

	public userAccountLinker: ForeignkeyLinker<UserAccount>;

}
