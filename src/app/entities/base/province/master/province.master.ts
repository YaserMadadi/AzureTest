import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Province, Province_Service } from '..';
import { Province_City_DetailUI } from '../detail/province-city.detail';



@Component({
  selector: 'base-province-master',
  templateUrl: './province.master.html',
  styleUrls: ['./province.master.scss'],
  providers: [
    Province_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ProvinceEditUI,        
    //ProvinceDeleteUI,
    Province_City_DetailUI
  ]
})
export class ProvinceMasterUI extends MasterUI<Province> implements IMasterUI<Province> {

  constructor() {
    super(inject(Province_Service))
  }


}
