import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { PriceScope, PriceScope_Service } from '..';
import { PriceScope_ServicePrice_DetailUI } from '../detail/priceScope-servicePrice.detail';



@Component({
  selector: 'base-priceScope-master',
  templateUrl: './priceScope.master.html',
  styleUrls: ['./priceScope.master.scss'],
  providers: [
    PriceScope_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //PriceScopeEditUI,        
    //PriceScopeDeleteUI,
    PriceScope_ServicePrice_DetailUI
  ]
})
export class PriceScopeMasterUI extends MasterUI<PriceScope> implements IMasterUI<PriceScope> {

  constructor() {
    super(inject(PriceScope_Service))
  }


}
