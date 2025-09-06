

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Country, Country_Service } from '..';
import { CountryEditUI } from '../edit/country.edit'
import { CountryDeleteUI } from '../delete/country.delete'
import { Province } from '../../province';
import { ProvinceEditUI } from '../../province/edit/province.edit';



@Component({
  selector: 'base-country-index',
  templateUrl: './country.hub.html',
  styleUrls: ['./country.hub.scss'],
  providers: [Country_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    CountryEditUI,
    CountryDeleteUI,
    ProvinceEditUI,
  ]
})
export class CountryHubUI extends HubUI<Country> implements IHubUI<Country> {

  constructor(public override service: Country_Service = inject(Country_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Province', () => this.onAddProvince()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('provinceEditUI')
  public provinceEditUI!: ProvinceEditUI;

  onAddProvince() {
    let province = new Province();
    province.country = this.currentInstance;
    this.provinceEditUI.Show(province);
  }


}
