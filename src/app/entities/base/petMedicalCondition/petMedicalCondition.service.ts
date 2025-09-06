

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { PetMedicalCondition, PetMedicalCondition_Builder } from '.';

import { MedicationType_Service } from '../medicationType';
import { Pet_Service } from '../pet';


@Injectable({ providedIn: 'root' })
export class PetMedicalCondition_Service extends Service<PetMedicalCondition> implements IService<PetMedicalCondition> {

  constructor() {
    super(PetMedicalCondition.Info, inject(PetMedicalCondition_Builder));
  }

  //#region Related Services
  
  public medicationTypeService: MedicationType_Service = inject(MedicationType_Service);

	public petService: Pet_Service = inject(Pet_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<PetMedicalCondition> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<PetMedicalCondition[]> {
    return super.RetrieveAll();
  }

  override Save(petMedicalCondition: PetMedicalCondition): Observable<PetMedicalCondition> {
    if (!PetMedicalCondition.Validate(petMedicalCondition)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(petMedicalCondition);
    }
    return super.Save(petMedicalCondition);
  }

  override SaveAttached(petMedicalCondition: PetMedicalCondition): Observable<PetMedicalCondition> {
    if (!PetMedicalCondition.Validate(petMedicalCondition)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(petMedicalCondition);
    }
    return super.SaveAttached(petMedicalCondition);
  }

  override SaveCollection(petMedicalConditionList: PetMedicalCondition[]): Observable<Result> {
    return super.SaveCollection(petMedicalConditionList);
  }

  override Delete(petMedicalCondition: PetMedicalCondition): Observable<boolean> {
    return super.Delete(petMedicalCondition);
  }

  override Seek(petMedicalCondition: PetMedicalCondition = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<PetMedicalCondition[]> {
    return super.Seek(petMedicalCondition); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(petMedicalCondition: PetMedicalCondition): Observable<PetMedicalCondition> {
    return super.SeekLast(petMedicalCondition);
  }

  override SeekByValue(value: string = ''): Observable<PetMedicalCondition[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
