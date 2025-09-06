

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Province, Province_Service } from '..';
import { ProvinceEditUI } from '../edit/province.edit'
import { ProvinceDeleteUI } from '../delete/province.delete'
import { Country } from '../../country';
import { City } from '../../city';
import { CityEditUI } from '../../city/edit/city.edit';



@Component({
  selector: 'base-province-index',
  templateUrl: './province.hub.html',
  styleUrls: ['./province.hub.scss'],
  providers: [Province_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ProvinceEditUI,
    ProvinceDeleteUI,
    LookupComponent,
		CityEditUI,
  ]
})
export class ProvinceHubUI extends HubUI<Province> implements IHubUI<Province> {

  constructor(public override service: Province_Service = inject(Province_Service)) {
    super(service);
    this.countryLinker = new ForeignkeyLinker<Country>(this.service.countryService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  City', () => this.onAddCity()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Country', () => this.navigateToUrl('/base/country')),
		];
  }

  public countryLinker: ForeignkeyLinker<Country>;

  
  @ViewChild('cityEditUI')
  public cityEditUI!: CityEditUI;

  onAddCity() {
    let city = new City();
    city.province = this.currentInstance;
    this.cityEditUI.Show(city);
  }


}
