

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Client } from '.';


@Injectable({ providedIn: 'root' })
export class Client_Builder extends ServiceBuilder<Client> implements IServiceBuilder<Client> {

  constructor() {
        super();
    }

  
  BuildInstance(): Client;
  BuildInstance(id: number): Client;
  BuildInstance(id: number, descriptor: string): Client;
  BuildInstance(id: number = 0, descriptor: string = ''): Client {
    return new Client(id, descriptor);
  }

  BuildSeekInstance(): Client {
    return Client_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Client {
    let client = new Client();
    client.gender = undefined;
		client.userAccount = undefined;
		client.phoneVerificationStatus = undefined;
		client.city = undefined;
		client.isActive = undefined;
    return client;
  }
}