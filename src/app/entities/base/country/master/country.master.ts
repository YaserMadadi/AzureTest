import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Country, Country_Service } from '..';
import { Country_Province_DetailUI } from '../detail/country-province.detail';



@Component({
  selector: 'base-country-master',
  templateUrl: './country.master.html',
  styleUrls: ['./country.master.scss'],
  providers: [
    Country_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //CountryEditUI,        
    //CountryDeleteUI,
    Country_Province_DetailUI
  ]
})
export class CountryMasterUI extends MasterUI<Country> implements IMasterUI<Country> {

  constructor() {
    super(inject(Country_Service))
  }


}
