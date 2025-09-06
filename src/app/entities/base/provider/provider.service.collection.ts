
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Provider } from '.';
import { AcceptedPetCategory, AcceptedPetCategory_Builder } from '../acceptedPetCategory';
import { Booking, Booking_Builder } from '../booking';
import { ClientReview, ClientReview_Builder } from '../clientReview';
import { LocationCoverage, LocationCoverage_Builder } from '../locationCoverage';
import { ProviderBankAccount, ProviderBankAccount_Builder } from '../providerBankAccount';
import { ProviderCertification, ProviderCertification_Builder } from '../providerCertification';
import { ProviderConnection, ProviderConnection_Builder } from '../providerConnection';
import { ProviderService, ProviderService_Builder } from '../providerService';
import { WorkTime, WorkTime_Builder } from '../workTime';
import { ProviderPayOut, ProviderPayOut_Builder } from '../../fund/providerPayOut';
import { ProviderWallet, ProviderWallet_Builder } from '../../fund/providerWallet';


@Injectable({ providedIn: 'root' })
export class Provider_ServiceCollection<T extends Provider = Provider> extends ServiceCollection<T> implements IServiceCollection<T> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfAcceptedPetCategory(provider_id: number, acceptedPetCategory: AcceptedPetCategory = AcceptedPetCategory_Builder.BuildSeekInstance()): Observable<AcceptedPetCategory[]> {
    return super.CollectionOf<AcceptedPetCategory>(this.builder.BuildInstance(provider_id), acceptedPetCategory);
  }

  CollectionOfBooking(provider_id: number, booking: Booking = Booking_Builder.BuildSeekInstance()): Observable<Booking[]> {
    return super.CollectionOf<Booking>(this.builder.BuildInstance(provider_id), booking);
  }

  CollectionOfClientReview(provider_id: number, clientReview: ClientReview = ClientReview_Builder.BuildSeekInstance()): Observable<ClientReview[]> {
    return super.CollectionOf<ClientReview>(this.builder.BuildInstance(provider_id), clientReview);
  }

  CollectionOfLocationCoverage(provider_id: number, locationCoverage: LocationCoverage = LocationCoverage_Builder.BuildSeekInstance()): Observable<LocationCoverage[]> {
    return super.CollectionOf<LocationCoverage>(this.builder.BuildInstance(provider_id), locationCoverage);
  }

  CollectionOfProviderBankAccount(provider_id: number, providerBankAccount: ProviderBankAccount = ProviderBankAccount_Builder.BuildSeekInstance()): Observable<ProviderBankAccount[]> {
    return super.CollectionOf<ProviderBankAccount>(this.builder.BuildInstance(provider_id), providerBankAccount);
  }

  CollectionOfProviderCertification(provider_id: number, providerCertification: ProviderCertification = ProviderCertification_Builder.BuildSeekInstance()): Observable<ProviderCertification[]> {
    return super.CollectionOf<ProviderCertification>(this.builder.BuildInstance(provider_id), providerCertification);
  }

  CollectionOfProviderConnection(provider_id: number, providerConnection: ProviderConnection = ProviderConnection_Builder.BuildSeekInstance()): Observable<ProviderConnection[]> {
    return super.CollectionOf<ProviderConnection>(this.builder.BuildInstance(provider_id), providerConnection);
  }

  CollectionOfProviderService(provider_id: number, providerService: ProviderService = ProviderService_Builder.BuildSeekInstance()): Observable<ProviderService[]> {
    return super.CollectionOf<ProviderService>(this.builder.BuildInstance(provider_id), providerService);
  }

  CollectionOfWorkTime(provider_id: number, workTime: WorkTime = WorkTime_Builder.BuildSeekInstance()): Observable<WorkTime[]> {
    return super.CollectionOf<WorkTime>(this.builder.BuildInstance(provider_id), workTime);
  }

  CollectionOfProviderPayOut(provider_id: number, providerPayOut: ProviderPayOut = ProviderPayOut_Builder.BuildSeekInstance()): Observable<ProviderPayOut[]> {
    return super.CollectionOf<ProviderPayOut>(this.builder.BuildInstance(provider_id), providerPayOut);
  }

  CollectionOfProviderWallet(provider_id: number, providerWallet: ProviderWallet = ProviderWallet_Builder.BuildSeekInstance()): Observable<ProviderWallet[]> {
    return super.CollectionOf<ProviderWallet>(this.builder.BuildInstance(provider_id), providerWallet);
  }

	//#endregion
}
