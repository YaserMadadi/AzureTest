

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Menu, Menu_Builder } from '.';

import { UserType_Service } from '../userType';


@Injectable({ providedIn: 'root' })
export class Menu_Service extends Service<Menu> implements IService<Menu> {

  constructor() {
    super(Menu.Info, inject(Menu_Builder));
  }

  //#region Related Services
  
  public userTypeService: UserType_Service = inject(UserType_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Menu> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Menu[]> {
    return super.RetrieveAll();
  }

  override Save(menu: Menu): Observable<Menu> {
    if (!Menu.Validate(menu)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(menu);
    }
    return super.Save(menu);
  }

  override SaveAttached(menu: Menu): Observable<Menu> {
    if (!Menu.Validate(menu)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(menu);
    }
    return super.SaveAttached(menu);
  }

  override SaveCollection(menuList: Menu[]): Observable<Result> {
    return super.SaveCollection(menuList);
  }

  override Delete(menu: Menu): Observable<boolean> {
    return super.Delete(menu);
  }

  override Seek(menu: Menu = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Menu[]> {
    return super.Seek(menu); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(menu: Menu): Observable<Menu> {
    return super.SeekLast(menu);
  }

  override SeekByValue(value: string = ''): Observable<Menu[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
