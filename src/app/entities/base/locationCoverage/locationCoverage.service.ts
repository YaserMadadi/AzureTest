

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { LocationCoverage, LocationCoverage_Builder } from '.';

import { City_Service } from '../city';
import { Provider_Service } from '../provider';


@Injectable({ providedIn: 'root' })
export class LocationCoverage_Service extends Service<LocationCoverage> implements IService<LocationCoverage> {

  constructor() {
    super(LocationCoverage.Info, inject(LocationCoverage_Builder));
  }

  //#region Related Services
  
  public cityService: City_Service = inject(City_Service);

	public providerService: Provider_Service = inject(Provider_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<LocationCoverage> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<LocationCoverage[]> {
    return super.RetrieveAll();
  }

  override Save(locationCoverage: LocationCoverage): Observable<LocationCoverage> {
    if (!LocationCoverage.Validate(locationCoverage)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(locationCoverage);
    }
    return super.Save(locationCoverage);
  }

  override SaveAttached(locationCoverage: LocationCoverage): Observable<LocationCoverage> {
    if (!LocationCoverage.Validate(locationCoverage)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(locationCoverage);
    }
    return super.SaveAttached(locationCoverage);
  }

  override SaveCollection(locationCoverageList: LocationCoverage[]): Observable<Result> {
    return super.SaveCollection(locationCoverageList);
  }

  override Delete(locationCoverage: LocationCoverage): Observable<boolean> {
    return super.Delete(locationCoverage);
  }

  override Seek(locationCoverage: LocationCoverage = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<LocationCoverage[]> {
    return super.Seek(locationCoverage); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(locationCoverage: LocationCoverage): Observable<LocationCoverage> {
    return super.SeekLast(locationCoverage);
  }

  override SeekByValue(value: string = ''): Observable<LocationCoverage[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
