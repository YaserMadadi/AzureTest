

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Entity, Entity_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class Entity_Service extends Service<Entity> implements IService<Entity> {

  constructor() {
    super(Entity.Info, inject(Entity_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Entity> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Entity[]> {
    return super.RetrieveAll();
  }

  override Save(entity: Entity): Observable<Entity> {
    if (!Entity.Validate(entity)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(entity);
    }
    return super.Save(entity);
  }

  override SaveAttached(entity: Entity): Observable<Entity> {
    if (!Entity.Validate(entity)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(entity);
    }
    return super.SaveAttached(entity);
  }

  override SaveCollection(entityList: Entity[]): Observable<Result> {
    return super.SaveCollection(entityList);
  }

  override Delete(entity: Entity): Observable<boolean> {
    return super.Delete(entity);
  }

  override Seek(entity: Entity = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Entity[]> {
    return super.Seek(entity); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(entity: Entity): Observable<Entity> {
    return super.SeekLast(entity);
  }

  override SeekByValue(value: string = ''): Observable<Entity[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
