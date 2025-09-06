
import { Info, BaseEntity, IBaseEntity } from '../../../../core';
import { Validator } from '../../../../core/tools';


import { WalletTopUp } from '../walletTopUp';



export class PaymentMethod extends BaseEntity implements IBaseEntity<PaymentMethod> {
  
  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = PaymentMethod.Info) {
	super(id, descriptor, info);
    
  }
    
  

  //region Info

  public static override readonly Info: Info = new Info('fund', 'paymentMethod', 'Payment Method');

  //endregion

  //#region Fields

	public title: string = '';
	
	public isActive?: boolean = false;

	//#endregion
    
  //#region Collection Properties

  public listOfWalletTopUp: WalletTopUp[] = [];

  //#endregion

  public static Validate(paymentMethod: PaymentMethod) : boolean {
    let result = 
      Validator.Validate(paymentMethod.title);

    if(result === false)
      console.log('PaymentMethod is unvalid : ', paymentMethod);

    return result;
  }
}
