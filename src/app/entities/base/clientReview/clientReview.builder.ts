

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ClientReview } from '.';


@Injectable({ providedIn: 'root' })
export class ClientReview_Builder extends ServiceBuilder<ClientReview> implements IServiceBuilder<ClientReview> {

  constructor() {
        super();
    }

  
  BuildInstance(): ClientReview;
  BuildInstance(id: number): ClientReview;
  BuildInstance(id: number, descriptor: string): ClientReview;
  BuildInstance(id: number = 0, descriptor: string = ''): ClientReview {
    return new ClientReview(id, descriptor);
  }

  BuildSeekInstance(): ClientReview {
    return ClientReview_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ClientReview {
    let clientReview = new ClientReview();
    clientReview.client = undefined;
		clientReview.provider = undefined;
		clientReview.time = undefined;
		clientReview.isActive = undefined;
    return clientReview;
  }
}