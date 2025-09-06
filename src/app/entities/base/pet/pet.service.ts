

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Pet, Pet_Builder } from '.';

import { Client_Service } from '../client';
import { Gender_Service } from '../gender';
import { WeightUnit_Service } from '../weightUnit';


@Injectable({ providedIn: 'root' })
export class Pet_Service extends Service<Pet> implements IService<Pet> {

  constructor() {
    super(Pet.Info, inject(Pet_Builder));
  }

  //#region Related Services
  
  public clientService: Client_Service = inject(Client_Service);

	public genderService: Gender_Service = inject(Gender_Service);

	public weightUnitService: WeightUnit_Service = inject(WeightUnit_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Pet> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Pet[]> {
    return super.RetrieveAll();
  }

  override Save(pet: Pet): Observable<Pet> {
    if (!Pet.Validate(pet)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(pet);
    }
    return super.Save(pet);
  }

  override SaveAttached(pet: Pet): Observable<Pet> {
    if (!Pet.Validate(pet)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(pet);
    }
    return super.SaveAttached(pet);
  }

  override SaveCollection(petList: Pet[]): Observable<Result> {
    return super.SaveCollection(petList);
  }

  override Delete(pet: Pet): Observable<boolean> {
    return super.Delete(pet);
  }

  override Seek(pet: Pet = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Pet[]> {
    return super.Seek(pet); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(pet: Pet): Observable<Pet> {
    return super.SeekLast(pet);
  }

  override SeekByValue(value: string = ''): Observable<Pet[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
