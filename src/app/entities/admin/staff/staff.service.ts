

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Staff, Staff_Builder } from '.';

import { Gender_Service } from '../../base/gender';
import { UserAccount_Service } from '../../base/userAccount';


@Injectable({ providedIn: 'root' })
export class Staff_Service extends Service<Staff> implements IService<Staff> {

  constructor() {
    super(Staff.Info, inject(Staff_Builder));
  }

  //#region Related Services
  
  public genderService: Gender_Service = inject(Gender_Service);

	public userAccountService: UserAccount_Service = inject(UserAccount_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Staff> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Staff[]> {
    return super.RetrieveAll();
  }

  override Save(staff: Staff): Observable<Staff> {
    if (!Staff.Validate(staff)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(staff);
    }
    return super.Save(staff);
  }

  override SaveAttached(staff: Staff): Observable<Staff> {
    if (!Staff.Validate(staff)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(staff);
    }
    return super.SaveAttached(staff);
  }

  override SaveCollection(staffList: Staff[]): Observable<Result> {
    return super.SaveCollection(staffList);
  }

  override Delete(staff: Staff): Observable<boolean> {
    return super.Delete(staff);
  }

  override Seek(staff: Staff = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Staff[]> {
    return super.Seek(staff); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(staff: Staff): Observable<Staff> {
    return super.SeekLast(staff);
  }

  override SeekByValue(value: string = ''): Observable<Staff[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
