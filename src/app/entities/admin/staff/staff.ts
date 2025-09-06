
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';

import { Gender } from '../../base/gender';
import { UserAccount } from '../../base/userAccount';

import { StaffPermission } from '../staffPermission';



export class Staff extends BaseEntity implements IBaseEntity<Staff> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = Staff.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('admin', 'staff', 'Staff');

  //endregion

  //#region Fields

	public firstName: string = '';
	
	public middleName: string = '';
	
	public lastName: string = '';
	
	public nickName: string = '';
	
	public gender?: Gender = new Gender();
	
	public userAccount?: UserAccount = new UserAccount();
	
	public phoneNumber: string = '';
	
	public isActive?: boolean = false;
	
	public note: string = '';

	//#endregion
    
  //#region Collection Properties

  public listOfStaffPermission: StaffPermission[] = [];

  //#endregion

  public static Validate(staff: Staff) : boolean {
    let result = 
      Validator.Validate(staff.firstName) &&
		Validator.Validate(staff.middleName) &&
		Validator.Validate(staff.lastName) &&
		Validator.Validate(staff.nickName) &&
		Validator.Validate(staff.gender) &&
		Validator.Validate(staff.userAccount) &&
		Validator.Validate(staff.phoneNumber);

    if(result === false)
      console.log('Staff is unvalid : ', staff);

    return result;
  }
}
