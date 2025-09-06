

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { AcceptedPetCategory, AcceptedPetCategory_Builder } from '.';

import { PetCategory_Service } from '../petCategory';
import { Provider_Service } from '../provider';


@Injectable({ providedIn: 'root' })
export class AcceptedPetCategory_Service extends Service<AcceptedPetCategory> implements IService<AcceptedPetCategory> {

  constructor() {
    super(AcceptedPetCategory.Info, inject(AcceptedPetCategory_Builder));
  }

  //#region Related Services
  
  public petCategoryService: PetCategory_Service = inject(PetCategory_Service);

	public providerService: Provider_Service = inject(Provider_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<AcceptedPetCategory> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<AcceptedPetCategory[]> {
    return super.RetrieveAll();
  }

  override Save(acceptedPetCategory: AcceptedPetCategory): Observable<AcceptedPetCategory> {
    if (!AcceptedPetCategory.Validate(acceptedPetCategory)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(acceptedPetCategory);
    }
    return super.Save(acceptedPetCategory);
  }

  override SaveAttached(acceptedPetCategory: AcceptedPetCategory): Observable<AcceptedPetCategory> {
    if (!AcceptedPetCategory.Validate(acceptedPetCategory)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(acceptedPetCategory);
    }
    return super.SaveAttached(acceptedPetCategory);
  }

  override SaveCollection(acceptedPetCategoryList: AcceptedPetCategory[]): Observable<Result> {
    return super.SaveCollection(acceptedPetCategoryList);
  }

  override Delete(acceptedPetCategory: AcceptedPetCategory): Observable<boolean> {
    return super.Delete(acceptedPetCategory);
  }

  override Seek(acceptedPetCategory: AcceptedPetCategory = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<AcceptedPetCategory[]> {
    return super.Seek(acceptedPetCategory); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(acceptedPetCategory: AcceptedPetCategory): Observable<AcceptedPetCategory> {
    return super.SeekLast(acceptedPetCategory);
  }

  override SeekByValue(value: string = ''): Observable<AcceptedPetCategory[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
