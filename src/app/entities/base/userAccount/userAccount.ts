
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { AccountStatus } from '../accountStatus';
import { UserType } from '../../admin/userType';

import { RoleMember } from '../../admin/roleMember';
import { Staff } from '../../admin/staff';
import { Client } from '../client';
import { EmailVerification } from '../emailVerification';
import { Provider } from '../provider';



export class UserAccount extends BaseEntity implements IBaseEntity<UserAccount> {

  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = UserAccount.Info) {
    super(id, descriptor, info);

  }



  //region Info

  public static override readonly Info: Info = new Info('base', 'userAccount', 'User Account');

  //endregion

  //#region Fields

  public email: string = '';

  public password: string = '';

  public hash?: string = '';

  public userType?: UserType = new UserType();

  public accountStatus?: AccountStatus = new AccountStatus();

  public statusNote: string = '';

  public emailIsVerified?: boolean = false;

  public note: string = '';

  public isActive?: boolean = false;

  //#endregion

  //#region Collection Properties

  public listOfRoleMember: RoleMember[] = [];

  public listOfStaff: Staff[] = [];

  public listOfClient: Client[] = [];

  public listOfEmailVerification: EmailVerification[] = [];

  public listOfProvider: Provider[] = [];

  //#endregion

  public static Validate(userAccount: UserAccount): boolean {
    let result =
      Validator.Validate(userAccount.email) &&
      Validator.Validate(userAccount.userType) &&
      Validator.Validate(userAccount.accountStatus) &&
      Validator.Validate(userAccount.statusNote);

    if (result === false)
      console.log('UserAccount is unvalid : ', userAccount);

    return result;
  }
}
