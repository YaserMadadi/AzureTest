
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { IndividualProvider } from '../individualProvider';



export class BackgroundCheckStatus extends BaseEntity implements IBaseEntity<BackgroundCheckStatus> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = BackgroundCheckStatus.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('base', 'backgroundCheckStatus', 'Background Check Status');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfIndividualProvider: IndividualProvider[] = [];

  //#endregion

  public static Validate(backgroundCheckStatus: BackgroundCheckStatus) : boolean {
    let result = 
      Validator.Validate(backgroundCheckStatus.title);

    if(result === false)
      console.log('BackgroundCheckStatus is unvalid : ', backgroundCheckStatus);

    return result;
  }
}
