

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { LocationCoverage, LocationCoverage_Service } from '..';
import { City } from '../../city';
import { Provider } from '../../provider';



@Component({
  selector: 'base-locationCoverage-edit',
  templateUrl: './locationCoverage.edit.html',
  styleUrls: ['./locationCoverage.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class LocationCoverageEditUI extends EditUI<LocationCoverage> {
    
  constructor(public override service: LocationCoverage_Service = inject(LocationCoverage_Service )) {
    super(service); 
    this.cityLinker = new ForeignkeyLinker<City>(this.service.cityService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
  }

  @Input() 
  set cityLocked(value: boolean) {
    this.cityLinker.locked = value;
  }

	@Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

  public cityLinker: ForeignkeyLinker<City>;

	public providerLinker: ForeignkeyLinker<Provider>;

}
