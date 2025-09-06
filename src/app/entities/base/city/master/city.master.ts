import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { City, City_Service } from '..';
import { City_Client_DetailUI } from '../detail/city-client.detail';
import { City_LocationCoverage_DetailUI } from '../detail/city-locationCoverage.detail';



@Component({
  selector: 'base-city-master',
  templateUrl: './city.master.html',
  styleUrls: ['./city.master.scss'],
  providers: [
    City_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //CityEditUI,        
    //CityDeleteUI,
    City_Client_DetailUI,
				City_LocationCoverage_DetailUI
  ]
})
export class CityMasterUI extends MasterUI<City> implements IMasterUI<City> {

  constructor() {
    super(inject(City_Service))
  }


}
