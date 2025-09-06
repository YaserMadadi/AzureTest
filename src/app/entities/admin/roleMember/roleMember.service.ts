

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { RoleMember, RoleMember_Builder } from '.';

import { Role_Service } from '../role';
import { UserAccount_Service } from '../../base/userAccount';


@Injectable({ providedIn: 'root' })
export class RoleMember_Service extends Service<RoleMember> implements IService<RoleMember> {

  constructor() {
    super(RoleMember.Info, inject(RoleMember_Builder));
  }

  //#region Related Services
  
  public roleService: Role_Service = inject(Role_Service);

	public userAccountService: UserAccount_Service = inject(UserAccount_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<RoleMember> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<RoleMember[]> {
    return super.RetrieveAll();
  }

  override Save(roleMember: RoleMember): Observable<RoleMember> {
    if (!RoleMember.Validate(roleMember)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(roleMember);
    }
    return super.Save(roleMember);
  }

  override SaveAttached(roleMember: RoleMember): Observable<RoleMember> {
    if (!RoleMember.Validate(roleMember)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(roleMember);
    }
    return super.SaveAttached(roleMember);
  }

  override SaveCollection(roleMemberList: RoleMember[]): Observable<Result> {
    return super.SaveCollection(roleMemberList);
  }

  override Delete(roleMember: RoleMember): Observable<boolean> {
    return super.Delete(roleMember);
  }

  override Seek(roleMember: RoleMember = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<RoleMember[]> {
    return super.Seek(roleMember); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(roleMember: RoleMember): Observable<RoleMember> {
    return super.SeekLast(roleMember);
  }

  override SeekByValue(value: string = ''): Observable<RoleMember[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
