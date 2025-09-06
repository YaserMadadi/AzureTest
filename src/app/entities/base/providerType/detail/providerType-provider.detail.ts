
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { ProviderType, ProviderType_ServiceCollection } from '../../providerType';
import { Provider, Provider_Builder } from '../../provider';
import { ProviderEditUI } from '../../provider/edit/provider.edit'
import { ProviderDeleteUI } from '../../provider/delete/provider.delete'
import { UserAccount, UserAccount_Service } from '../../userAccount';



@Component({
  selector: 'base-providerType-provider-detail',
  templateUrl: './providerType-provider.detail.html',
  styleUrls: ['./providerType-provider.detail.scss'],
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
export class ProviderType_Provider_DetailUI extends DetailUI<ProviderType, Provider> {

  constructor(private serviceCollection: ProviderType_ServiceCollection = inject(ProviderType_ServiceCollection)) {
    super(serviceCollection.CollectionOfProvider.bind(serviceCollection), inject(Provider_Builder));
    this.currentInstance = new Provider();
  }

  @Input()
  public set providerType(value: ProviderType) {
    this.masterInstance = { ...value };
    //this.currentInstance.providerType = { ...value };
    this.sourceInstance.providerType = { ...value };
  }

  public userAccountLinker: ForeignkeyLinker<UserAccount> = new ForeignkeyLinker<UserAccount>(inject(UserAccount_Service), true);

		

}
