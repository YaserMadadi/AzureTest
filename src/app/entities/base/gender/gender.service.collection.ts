
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Gender } from '.';
import { Staff, Staff_Builder } from '../../admin/staff';
import { Client, Client_Builder } from '../client';
import { IndividualProvider, IndividualProvider_Builder } from '../individualProvider';
import { Pet, Pet_Builder } from '../pet';


@Injectable({ providedIn: 'root' })
export class Gender_ServiceCollection extends ServiceCollection<Gender> implements IServiceCollection<Gender> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfStaff(gender_id: number, staff: Staff = Staff_Builder.BuildSeekInstance()): Observable<Staff[]> {
    return super.CollectionOf<Staff>(new Gender(gender_id), staff);
  }

  CollectionOfClient(gender_id: number, client: Client = Client_Builder.BuildSeekInstance()): Observable<Client[]> {
    return super.CollectionOf<Client>(new Gender(gender_id), client);
  }

  CollectionOfIndividualProvider(gender_id: number, individualProvider: IndividualProvider = IndividualProvider_Builder.BuildSeekInstance()): Observable<IndividualProvider[]> {
    return super.CollectionOf<IndividualProvider>(new Gender(gender_id), individualProvider);
  }

  CollectionOfPet(gender_id: number, pet: Pet = Pet_Builder.BuildSeekInstance()): Observable<Pet[]> {
    return super.CollectionOf<Pet>(new Gender(gender_id), pet);
  }

	//#endregion
}
