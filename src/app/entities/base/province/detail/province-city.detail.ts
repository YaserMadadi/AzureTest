
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Province, Province_ServiceCollection } from '../../province';
import { City, City_Builder } from '../../city';
import { CityEditUI } from '../../city/edit/city.edit'
import { CityDeleteUI } from '../../city/delete/city.delete'



@Component({
  selector: 'base-province-city-detail',
  templateUrl: './province-city.detail.html',
  styleUrls: ['./province-city.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    
    CityEditUI,        
    CityDeleteUI,
  ]
}) 
export class Province_City_DetailUI extends DetailUI<Province, City> {

  constructor(private serviceCollection: Province_ServiceCollection = inject(Province_ServiceCollection)) {
    super(serviceCollection.CollectionOfCity.bind(serviceCollection), inject(City_Builder));
    this.currentInstance = new City();
  }

  @Input()
  public set province(value: Province) {
    this.masterInstance = { ...value };
    //this.currentInstance.province = { ...value };
    this.sourceInstance.province = { ...value };
  }

  

}
