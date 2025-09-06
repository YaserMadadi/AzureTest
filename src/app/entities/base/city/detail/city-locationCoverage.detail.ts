
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { City, City_ServiceCollection } from '../../city';
import { LocationCoverage, LocationCoverage_Builder } from '../../locationCoverage';
import { LocationCoverageEditUI } from '../../locationCoverage/edit/locationCoverage.edit'
import { LocationCoverageDeleteUI } from '../../locationCoverage/delete/locationCoverage.delete'
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-city-locationCoverage-detail',
  templateUrl: './city-locationCoverage.detail.html',
  styleUrls: ['./city-locationCoverage.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    LocationCoverageEditUI,        
    LocationCoverageDeleteUI,
  ]
}) 
export class City_LocationCoverage_DetailUI extends DetailUI<City, LocationCoverage> {

  constructor(private serviceCollection: City_ServiceCollection = inject(City_ServiceCollection)) {
    super(serviceCollection.CollectionOfLocationCoverage.bind(serviceCollection), inject(LocationCoverage_Builder));
    this.currentInstance = new LocationCoverage();
  }

  @Input()
  public set city(value: City) {
    this.masterInstance = { ...value };
    //this.currentInstance.city = { ...value };
    this.sourceInstance.city = { ...value };
  }

  public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
