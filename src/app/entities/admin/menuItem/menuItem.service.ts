

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { MenuItem, MenuItem_Builder } from '.';

import { Menu_Service } from '../menu';


@Injectable({ providedIn: 'root' })
export class MenuItem_Service extends Service<MenuItem> implements IService<MenuItem> {

  constructor() {
    super(MenuItem.Info, inject(MenuItem_Builder));
  }

  //#region Related Services
  
  public menuService: Menu_Service = inject(Menu_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<MenuItem> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<MenuItem[]> {
    return super.RetrieveAll();
  }

  override Save(menuItem: MenuItem): Observable<MenuItem> {
    if (!MenuItem.Validate(menuItem)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(menuItem);
    }
    return super.Save(menuItem);
  }

  override SaveAttached(menuItem: MenuItem): Observable<MenuItem> {
    if (!MenuItem.Validate(menuItem)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(menuItem);
    }
    return super.SaveAttached(menuItem);
  }

  override SaveCollection(menuItemList: MenuItem[]): Observable<Result> {
    return super.SaveCollection(menuItemList);
  }

  override Delete(menuItem: MenuItem): Observable<boolean> {
    return super.Delete(menuItem);
  }

  override Seek(menuItem: MenuItem = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<MenuItem[]> {
    return super.Seek(menuItem); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(menuItem: MenuItem): Observable<MenuItem> {
    return super.SeekLast(menuItem);
  }

  override SeekByValue(value: string = ''): Observable<MenuItem[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
