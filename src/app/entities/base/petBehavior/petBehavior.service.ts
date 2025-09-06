

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { PetBehavior, PetBehavior_Builder } from '.';

import { BehaviorCategory_Service } from '../behaviorCategory';
import { Pet_Service } from '../pet';


@Injectable({ providedIn: 'root' })
export class PetBehavior_Service extends Service<PetBehavior> implements IService<PetBehavior> {

  constructor() {
    super(PetBehavior.Info, inject(PetBehavior_Builder));
  }

  //#region Related Services
  
  public behaviorCategoryService: BehaviorCategory_Service = inject(BehaviorCategory_Service);

	public petService: Pet_Service = inject(Pet_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<PetBehavior> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<PetBehavior[]> {
    return super.RetrieveAll();
  }

  override Save(petBehavior: PetBehavior): Observable<PetBehavior> {
    if (!PetBehavior.Validate(petBehavior)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(petBehavior);
    }
    return super.Save(petBehavior);
  }

  override SaveAttached(petBehavior: PetBehavior): Observable<PetBehavior> {
    if (!PetBehavior.Validate(petBehavior)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(petBehavior);
    }
    return super.SaveAttached(petBehavior);
  }

  override SaveCollection(petBehaviorList: PetBehavior[]): Observable<Result> {
    return super.SaveCollection(petBehaviorList);
  }

  override Delete(petBehavior: PetBehavior): Observable<boolean> {
    return super.Delete(petBehavior);
  }

  override Seek(petBehavior: PetBehavior = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<PetBehavior[]> {
    return super.Seek(petBehavior); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(petBehavior: PetBehavior): Observable<PetBehavior> {
    return super.SeekLast(petBehavior);
  }

  override SeekByValue(value: string = ''): Observable<PetBehavior[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
