
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { UserAccount } from '.';
import { RoleMember, RoleMember_Builder } from '../../admin/roleMember';
import { Staff, Staff_Builder } from '../../admin/staff';
import { Client, Client_Builder } from '../client';
import { EmailVerification, EmailVerification_Builder } from '../emailVerification';
import { Provider, Provider_Builder } from '../provider';


@Injectable({ providedIn: 'root' })
export class UserAccount_ServiceCollection extends ServiceCollection<UserAccount> implements IServiceCollection<UserAccount> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfRoleMember(userAccount_id: number, roleMember: RoleMember = RoleMember_Builder.BuildSeekInstance()): Observable<RoleMember[]> {
    return super.CollectionOf<RoleMember>(new UserAccount(userAccount_id), roleMember);
  }

  CollectionOfStaff(userAccount_id: number, staff: Staff = Staff_Builder.BuildSeekInstance()): Observable<Staff[]> {
    return super.CollectionOf<Staff>(new UserAccount(userAccount_id), staff);
  }

  CollectionOfClient(userAccount_id: number, client: Client = Client_Builder.BuildSeekInstance()): Observable<Client[]> {
    return super.CollectionOf<Client>(new UserAccount(userAccount_id), client);
  }

  CollectionOfEmailVerification(userAccount_id: number, emailVerification: EmailVerification = EmailVerification_Builder.BuildSeekInstance()): Observable<EmailVerification[]> {
    return super.CollectionOf<EmailVerification>(new UserAccount(userAccount_id), emailVerification);
  }

  CollectionOfProvider(userAccount_id: number, provider: Provider = Provider_Builder.BuildSeekInstance()): Observable<Provider[]> {
    return super.CollectionOf<Provider>(new UserAccount(userAccount_id), provider);
  }

	//#endregion
}
