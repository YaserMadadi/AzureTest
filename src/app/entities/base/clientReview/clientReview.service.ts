

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ClientReview, ClientReview_Builder } from '.';

import { Client_Service } from '../client';
import { Provider_Service } from '../provider';


@Injectable({ providedIn: 'root' })
export class ClientReview_Service extends Service<ClientReview> implements IService<ClientReview> {

  constructor() {
    super(ClientReview.Info, inject(ClientReview_Builder));
  }

  //#region Related Services
  
  public clientService: Client_Service = inject(Client_Service);

	public providerService: Provider_Service = inject(Provider_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ClientReview> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ClientReview[]> {
    return super.RetrieveAll();
  }

  override Save(clientReview: ClientReview): Observable<ClientReview> {
    if (!ClientReview.Validate(clientReview)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(clientReview);
    }
    return super.Save(clientReview);
  }

  override SaveAttached(clientReview: ClientReview): Observable<ClientReview> {
    if (!ClientReview.Validate(clientReview)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(clientReview);
    }
    return super.SaveAttached(clientReview);
  }

  override SaveCollection(clientReviewList: ClientReview[]): Observable<Result> {
    return super.SaveCollection(clientReviewList);
  }

  override Delete(clientReview: ClientReview): Observable<boolean> {
    return super.Delete(clientReview);
  }

  override Seek(clientReview: ClientReview = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ClientReview[]> {
    return super.Seek(clientReview); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(clientReview: ClientReview): Observable<ClientReview> {
    return super.SeekLast(clientReview);
  }

  override SeekByValue(value: string = ''): Observable<ClientReview[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
