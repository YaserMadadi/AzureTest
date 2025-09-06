
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Gender, Gender_ServiceCollection } from '../../gender';
import { Client, Client_Builder } from '../../client';
import { ClientEditUI } from '../../client/edit/client.edit'
import { ClientDeleteUI } from '../../client/delete/client.delete'
import { City, City_Service } from '../../city';
import { VerificationStatus, VerificationStatus_Service } from '../../verificationStatus';
import { UserAccount, UserAccount_Service } from '../../userAccount';



@Component({
  selector: 'base-gender-client-detail',
  templateUrl: './gender-client.detail.html',
  styleUrls: ['./gender-client.detail.scss'],
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
export class Gender_Client_DetailUI extends DetailUI<Gender, Client> {

  constructor(private serviceCollection: Gender_ServiceCollection = inject(Gender_ServiceCollection)) {
    super(serviceCollection.CollectionOfClient.bind(serviceCollection), inject(Client_Builder));
    this.currentInstance = new Client();
  }

  @Input()
  public set gender(value: Gender) {
    this.masterInstance = { ...value };
    //this.currentInstance.gender = { ...value };
    this.sourceInstance.gender = { ...value };
  }

  public cityLinker: ForeignkeyLinker<City> = new ForeignkeyLinker<City>(inject(City_Service), true);

		public phoneVerificationStatusLinker: ForeignkeyLinker<VerificationStatus> = new ForeignkeyLinker<VerificationStatus>(inject(VerificationStatus_Service), true);

		public userAccountLinker: ForeignkeyLinker<UserAccount> = new ForeignkeyLinker<UserAccount>(inject(UserAccount_Service), true);

		

}
