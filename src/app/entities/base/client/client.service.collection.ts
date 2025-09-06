
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Client } from '.';
import { ClientNotification, ClientNotification_Builder } from '../clientNotification';
import { ClientReview, ClientReview_Builder } from '../clientReview';
import { Pet, Pet_Builder } from '../pet';
import { PhoneNumberVerification, PhoneNumberVerification_Builder } from '../phoneNumberVerification';
import { ClientWallet, ClientWallet_Builder } from '../../fund/clientWallet';


@Injectable({ providedIn: 'root' })
export class Client_ServiceCollection extends ServiceCollection<Client> implements IServiceCollection<Client> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfClientNotification(client_id: number, clientNotification: ClientNotification = ClientNotification_Builder.BuildSeekInstance()): Observable<ClientNotification[]> {
    return super.CollectionOf<ClientNotification>(new Client(client_id), clientNotification);
  }

  CollectionOfClientReview(client_id: number, clientReview: ClientReview = ClientReview_Builder.BuildSeekInstance()): Observable<ClientReview[]> {
    return super.CollectionOf<ClientReview>(new Client(client_id), clientReview);
  }

  CollectionOfPet(client_id: number, pet: Pet = Pet_Builder.BuildSeekInstance()): Observable<Pet[]> {
    return super.CollectionOf<Pet>(new Client(client_id), pet);
  }

  CollectionOfPhoneNumberVerification(client_id: number, phoneNumberVerification: PhoneNumberVerification = PhoneNumberVerification_Builder.BuildSeekInstance()): Observable<PhoneNumberVerification[]> {
    return super.CollectionOf<PhoneNumberVerification>(new Client(client_id), phoneNumberVerification);
  }

  CollectionOfClientWallet(client_id: number, clientWallet: ClientWallet = ClientWallet_Builder.BuildSeekInstance()): Observable<ClientWallet[]> {
    return super.CollectionOf<ClientWallet>(new Client(client_id), clientWallet);
  }

	//#endregion
}
