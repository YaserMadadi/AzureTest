

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Gender, Gender_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class Gender_Service extends Service<Gender> implements IService<Gender> {

  constructor() {
    super(Gender.Info, inject(Gender_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Gender> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Gender[]> {
    return super.RetrieveAll();
  }

  override Save(gender: Gender): Observable<Gender> {
    if (!Gender.Validate(gender)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(gender);
    }
    return super.Save(gender);
  }

  override SaveAttached(gender: Gender): Observable<Gender> {
    if (!Gender.Validate(gender)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(gender);
    }
    return super.SaveAttached(gender);
  }

  override SaveCollection(genderList: Gender[]): Observable<Result> {
    return super.SaveCollection(genderList);
  }

  override Delete(gender: Gender): Observable<boolean> {
    return super.Delete(gender);
  }

  override Seek(gender: Gender = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Gender[]> {
    return super.Seek(gender); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(gender: Gender): Observable<Gender> {
    return super.SeekLast(gender);
  }

  override SeekByValue(value: string = ''): Observable<Gender[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
