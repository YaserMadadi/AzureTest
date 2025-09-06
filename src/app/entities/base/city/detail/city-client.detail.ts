
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { City, City_ServiceCollection } from '../../city';
import { Client, Client_Builder } from '../../client';
import { ClientEditUI } from '../../client/edit/client.edit'
import { ClientDeleteUI } from '../../client/delete/client.delete'
import { Gender, Gender_Service } from '../../gender';
import { VerificationStatus, VerificationStatus_Service } from '../../verificationStatus';
import { UserAccount, UserAccount_Service } from '../../userAccount';



@Component({
  selector: 'base-city-client-detail',
  templateUrl: './city-client.detail.html',
  styleUrls: ['./city-client.detail.scss'],
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
export class City_Client_DetailUI extends DetailUI<City, Client> {

  constructor(private serviceCollection: City_ServiceCollection = inject(City_ServiceCollection)) {
    super(serviceCollection.CollectionOfClient.bind(serviceCollection), inject(Client_Builder));
    this.currentInstance = new Client();
  }

  @Input()
  public set city(value: City) {
    this.masterInstance = { ...value };
    //this.currentInstance.city = { ...value };
    this.sourceInstance.city = { ...value };
  }

  public genderLinker: ForeignkeyLinker<Gender> = new ForeignkeyLinker<Gender>(inject(Gender_Service), true);

		public phoneVerificationStatusLinker: ForeignkeyLinker<VerificationStatus> = new ForeignkeyLinker<VerificationStatus>(inject(VerificationStatus_Service), true);

		public userAccountLinker: ForeignkeyLinker<UserAccount> = new ForeignkeyLinker<UserAccount>(inject(UserAccount_Service), true);

		

}
