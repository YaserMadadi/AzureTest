
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { UserAccount, UserAccount_ServiceCollection } from '../../userAccount';
import { Provider, Provider_Builder } from '../../provider';
import { ProviderEditUI } from '../../provider/edit/provider.edit'
import { ProviderDeleteUI } from '../../provider/delete/provider.delete'
import { ProviderType, ProviderType_Service } from '../../providerType';



@Component({
  selector: 'base-userAccount-provider-detail',
  templateUrl: './userAccount-provider.detail.html',
  styleUrls: ['./userAccount-provider.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ProviderEditUI,        
    ProviderDeleteUI,
  ]
}) 
export class UserAccount_Provider_DetailUI extends DetailUI<UserAccount, Provider> {

  constructor(private serviceCollection: UserAccount_ServiceCollection = inject(UserAccount_ServiceCollection)) {
    super(serviceCollection.CollectionOfProvider.bind(serviceCollection), inject(Provider_Builder));
    this.currentInstance = new Provider();
  }

  @Input()
  public set userAccount(value: UserAccount) {
    this.masterInstance = { ...value };
    //this.currentInstance.userAccount = { ...value };
    this.sourceInstance.userAccount = { ...value };
  }

  public providerTypeLinker: ForeignkeyLinker<ProviderType> = new ForeignkeyLinker<ProviderType>(inject(ProviderType_Service), true);

		

}
