

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { LocationCoverage, LocationCoverage_Service } from '..';
import { LocationCoverageEditUI } from '../edit/locationCoverage.edit'
import { LocationCoverageDeleteUI } from '../delete/locationCoverage.delete'
import { City } from '../../city';
import { Provider } from '../../provider';



@Component({
  selector: 'base-locationCoverage-index',
  templateUrl: './locationCoverage.hub.html',
  styleUrls: ['./locationCoverage.hub.scss'],
  providers: [LocationCoverage_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    LocationCoverageEditUI,
    LocationCoverageDeleteUI,
    LookupComponent,
  ]
})
export class LocationCoverageHubUI extends HubUI<LocationCoverage> implements IHubUI<LocationCoverage> {

  constructor(public override service: LocationCoverage_Service = inject(LocationCoverage_Service)) {
    super(service);
    this.cityLinker = new ForeignkeyLinker<City>(this.service.cityService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  City', () => this.navigateToUrl('/base/city')),
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
		];
  }

  public cityLinker: ForeignkeyLinker<City>;

	public providerLinker: ForeignkeyLinker<Provider>;

  

}
