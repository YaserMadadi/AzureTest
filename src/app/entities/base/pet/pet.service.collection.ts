
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Pet } from '.';
import { Booking, Booking_Builder } from '../booking';
import { PetBehavior, PetBehavior_Builder } from '../petBehavior';
import { PetMedicalCondition, PetMedicalCondition_Builder } from '../petMedicalCondition';


@Injectable({ providedIn: 'root' })
export class Pet_ServiceCollection extends ServiceCollection<Pet> implements IServiceCollection<Pet> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfBooking(pet_id: number, booking: Booking = Booking_Builder.BuildSeekInstance()): Observable<Booking[]> {
    return super.CollectionOf<Booking>(new Pet(pet_id), booking);
  }

  CollectionOfPetBehavior(pet_id: number, petBehavior: PetBehavior = PetBehavior_Builder.BuildSeekInstance()): Observable<PetBehavior[]> {
    return super.CollectionOf<PetBehavior>(new Pet(pet_id), petBehavior);
  }

  CollectionOfPetMedicalCondition(pet_id: number, petMedicalCondition: PetMedicalCondition = PetMedicalCondition_Builder.BuildSeekInstance()): Observable<PetMedicalCondition[]> {
    return super.CollectionOf<PetMedicalCondition>(new Pet(pet_id), petMedicalCondition);
  }

	//#endregion
}
