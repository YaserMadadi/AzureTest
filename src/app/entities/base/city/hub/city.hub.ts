

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { City, City_Service } from '..';
import { CityEditUI } from '../edit/city.edit'
import { CityDeleteUI } from '../delete/city.delete'
import { Province } from '../../province';
import { Client } from '../../client';
import { ClientEditUI } from '../../client/edit/client.edit';
import { LocationCoverage } from '../../locationCoverage';
import { LocationCoverageEditUI } from '../../locationCoverage/edit/locationCoverage.edit';



@Component({
  selector: 'base-city-index',
  templateUrl: './city.hub.html',
  styleUrls: ['./city.hub.scss'],
  providers: [City_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    CityEditUI,
    CityDeleteUI,
    LookupComponent,
		ClientEditUI,
		LocationCoverageEditUI,
  ]
})
export class CityHubUI extends HubUI<City> implements IHubUI<City> {

  constructor(public override service: City_Service = inject(City_Service)) {
    super(service);
    this.provinceLinker = new ForeignkeyLinker<Province>(this.service.provinceService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Client', () => this.onAddClient()),
			new DropdownMenuItem('Add  Location Coverage', () => this.onAddLocationCoverage()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Province', () => this.navigateToUrl('/base/province')),
		];
  }

  public provinceLinker: ForeignkeyLinker<Province>;

  
  @ViewChild('clientEditUI')
  public clientEditUI!: ClientEditUI;

  onAddClient() {
    let client = new Client();
    client.city = this.currentInstance;
    this.clientEditUI.Show(client);
  }


	
  @ViewChild('locationCoverageEditUI')
  public locationCoverageEditUI!: LocationCoverageEditUI;

  onAddLocationCoverage() {
    let locationCoverage = new LocationCoverage();
    locationCoverage.city = this.currentInstance;
    this.locationCoverageEditUI.Show(locationCoverage);
  }


}
