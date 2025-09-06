

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { PetCategory, PetCategory_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class PetCategory_Service extends Service<PetCategory> implements IService<PetCategory> {

  constructor() {
    super(PetCategory.Info, inject(PetCategory_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<PetCategory> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<PetCategory[]> {
    return super.RetrieveAll();
  }

  override Save(petCategory: PetCategory): Observable<PetCategory> {
    if (!PetCategory.Validate(petCategory)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(petCategory);
    }
    return super.Save(petCategory);
  }

  override SaveAttached(petCategory: PetCategory): Observable<PetCategory> {
    if (!PetCategory.Validate(petCategory)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(petCategory);
    }
    return super.SaveAttached(petCategory);
  }

  override SaveCollection(petCategoryList: PetCategory[]): Observable<Result> {
    return super.SaveCollection(petCategoryList);
  }

  override Delete(petCategory: PetCategory): Observable<boolean> {
    return super.Delete(petCategory);
  }

  override Seek(petCategory: PetCategory = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<PetCategory[]> {
    return super.Seek(petCategory); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(petCategory: PetCategory): Observable<PetCategory> {
    return super.SeekLast(petCategory);
  }

  override SeekByValue(value: string = ''): Observable<PetCategory[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
