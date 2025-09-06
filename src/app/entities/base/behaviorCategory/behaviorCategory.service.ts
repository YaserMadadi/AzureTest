

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { BehaviorCategory, BehaviorCategory_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class BehaviorCategory_Service extends Service<BehaviorCategory> implements IService<BehaviorCategory> {

  constructor() {
    super(BehaviorCategory.Info, inject(BehaviorCategory_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<BehaviorCategory> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<BehaviorCategory[]> {
    return super.RetrieveAll();
  }

  override Save(behaviorCategory: BehaviorCategory): Observable<BehaviorCategory> {
    if (!BehaviorCategory.Validate(behaviorCategory)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(behaviorCategory);
    }
    return super.Save(behaviorCategory);
  }

  override SaveAttached(behaviorCategory: BehaviorCategory): Observable<BehaviorCategory> {
    if (!BehaviorCategory.Validate(behaviorCategory)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(behaviorCategory);
    }
    return super.SaveAttached(behaviorCategory);
  }

  override SaveCollection(behaviorCategoryList: BehaviorCategory[]): Observable<Result> {
    return super.SaveCollection(behaviorCategoryList);
  }

  override Delete(behaviorCategory: BehaviorCategory): Observable<boolean> {
    return super.Delete(behaviorCategory);
  }

  override Seek(behaviorCategory: BehaviorCategory = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<BehaviorCategory[]> {
    return super.Seek(behaviorCategory); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(behaviorCategory: BehaviorCategory): Observable<BehaviorCategory> {
    return super.SeekLast(behaviorCategory);
  }

  override SeekByValue(value: string = ''): Observable<BehaviorCategory[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
