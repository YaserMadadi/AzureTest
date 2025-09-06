

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { PaymentMethod, PaymentMethod_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class PaymentMethod_Service extends Service<PaymentMethod> implements IService<PaymentMethod> {

  constructor() {
    super(PaymentMethod.Info, inject(PaymentMethod_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<PaymentMethod> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<PaymentMethod[]> {
    return super.RetrieveAll();
  }

  override Save(paymentMethod: PaymentMethod): Observable<PaymentMethod> {
    if (!PaymentMethod.Validate(paymentMethod)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(paymentMethod);
    }
    return super.Save(paymentMethod);
  }

  override SaveAttached(paymentMethod: PaymentMethod): Observable<PaymentMethod> {
    if (!PaymentMethod.Validate(paymentMethod)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(paymentMethod);
    }
    return super.SaveAttached(paymentMethod);
  }

  override SaveCollection(paymentMethodList: PaymentMethod[]): Observable<Result> {
    return super.SaveCollection(paymentMethodList);
  }

  override Delete(paymentMethod: PaymentMethod): Observable<boolean> {
    return super.Delete(paymentMethod);
  }

  override Seek(paymentMethod: PaymentMethod = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<PaymentMethod[]> {
    return super.Seek(paymentMethod); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(paymentMethod: PaymentMethod): Observable<PaymentMethod> {
    return super.SeekLast(paymentMethod);
  }

  override SeekByValue(value: string = ''): Observable<PaymentMethod[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
