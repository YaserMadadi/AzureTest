

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Client, Client_Builder } from '.';

import { City_Service } from '../city';
import { Gender_Service } from '../gender';
import { VerificationStatus_Service } from '../verificationStatus';
import { UserAccount_Service } from '../userAccount';


@Injectable({ providedIn: 'root' })
export class Client_Service extends Service<Client> implements IService<Client> {

  constructor() {
    super(Client.Info, inject(Client_Builder));
  }

  //#region Related Services
  
  public cityService: City_Service = inject(City_Service);

	public genderService: Gender_Service = inject(Gender_Service);

	public verificationStatusService: VerificationStatus_Service = inject(VerificationStatus_Service);

	public userAccountService: UserAccount_Service = inject(UserAccount_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Client> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Client[]> {
    return super.RetrieveAll();
  }

  override Save(client: Client): Observable<Client> {
    if (!Client.Validate(client)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(client);
    }
    return super.Save(client);
  }

  override SaveAttached(client: Client): Observable<Client> {
    if (!Client.Validate(client)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(client);
    }
    return super.SaveAttached(client);
  }

  override SaveCollection(clientList: Client[]): Observable<Result> {
    return super.SaveCollection(clientList);
  }

  override Delete(client: Client): Observable<boolean> {
    return super.Delete(client);
  }

  override Seek(client: Client = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Client[]> {
    return super.Seek(client); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(client: Client): Observable<Client> {
    return super.SeekLast(client);
  }

  override SeekByValue(value: string = ''): Observable<Client[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
