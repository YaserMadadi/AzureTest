
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { UserAccount, UserAccount_ServiceCollection } from '../../userAccount';
import { Client, Client_Builder } from '../../client';
import { ClientEditUI } from '../../client/edit/client.edit'
import { ClientDeleteUI } from '../../client/delete/client.delete'
import { City, City_Service } from '../../city';
import { Gender, Gender_Service } from '../../gender';
import { VerificationStatus, VerificationStatus_Service } from '../../verificationStatus';



@Component({
  selector: 'base-userAccount-client-detail',
  templateUrl: './userAccount-client.detail.html',
  styleUrls: ['./userAccount-client.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ClientEditUI,        
    ClientDeleteUI,
  ]
}) 
export class UserAccount_Client_DetailUI extends DetailUI<UserAccount, Client> {

  constructor(private serviceCollection: UserAccount_ServiceCollection = inject(UserAccount_ServiceCollection)) {
    super(serviceCollection.CollectionOfClient.bind(serviceCollection), inject(Client_Builder));
    this.currentInstance = new Client();
  }

  @Input()
  public set userAccount(value: UserAccount) {
    this.masterInstance = { ...value };
    //this.currentInstance.userAccount = { ...value };
    this.sourceInstance.userAccount = { ...value };
  }

  public cityLinker: ForeignkeyLinker<City> = new ForeignkeyLinker<City>(inject(City_Service), true);

		public genderLinker: ForeignkeyLinker<Gender> = new ForeignkeyLinker<Gender>(inject(Gender_Service), true);

		public phoneVerificationStatusLinker: ForeignkeyLinker<VerificationStatus> = new ForeignkeyLinker<VerificationStatus>(inject(VerificationStatus_Service), true);

		

}
