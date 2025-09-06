
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Country, Country_ServiceCollection } from '../../country';
import { Province, Province_Builder } from '../../province';
import { ProvinceEditUI } from '../../province/edit/province.edit'
import { ProvinceDeleteUI } from '../../province/delete/province.delete'



@Component({
  selector: 'base-country-province-detail',
  templateUrl: './country-province.detail.html',
  styleUrls: ['./country-province.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    
    ProvinceEditUI,        
    ProvinceDeleteUI,
  ]
}) 
export class Country_Province_DetailUI extends DetailUI<Country, Province> {

  constructor(private serviceCollection: Country_ServiceCollection = inject(Country_ServiceCollection)) {
    super(serviceCollection.CollectionOfProvince.bind(serviceCollection), inject(Province_Builder));
    this.currentInstance = new Province();
  }

  @Input()
  public set country(value: Country) {
    this.masterInstance = { ...value };
    //this.currentInstance.country = { ...value };
    this.sourceInstance.country = { ...value };
  }

  

}
