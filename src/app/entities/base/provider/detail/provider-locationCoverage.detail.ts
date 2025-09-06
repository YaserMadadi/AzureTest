
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../provider';
import { LocationCoverage, LocationCoverage_Builder } from '../../locationCoverage';
import { LocationCoverageEditUI } from '../../locationCoverage/edit/locationCoverage.edit'
import { LocationCoverageDeleteUI } from '../../locationCoverage/delete/locationCoverage.delete'
import { City, City_Service } from '../../city';



@Component({
  selector: 'base-provider-locationCoverage-detail',
  templateUrl: './provider-locationCoverage.detail.html',
  styleUrls: ['./provider-locationCoverage.detail.scss'],
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
export class Provider_LocationCoverage_DetailUI extends DetailUI<Provider, LocationCoverage> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfLocationCoverage.bind(serviceCollection), inject(LocationCoverage_Builder));
    this.currentInstance = new LocationCoverage();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  public cityLinker: ForeignkeyLinker<City> = new ForeignkeyLinker<City>(inject(City_Service), true);

		

}
