

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { City, City_Service } from '..';
import { Province } from '../../province';



@Component({
  selector: 'base-city-edit',
  templateUrl: './city.edit.html',
  styleUrls: ['./city.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class CityEditUI extends EditUI<City> {
    
  constructor(public override service: City_Service = inject(City_Service )) {
    super(service); 
    this.provinceLinker = new ForeignkeyLinker<Province>(this.service.provinceService, true);
  }

  @Input() 
  set provinceLocked(value: boolean) {
    this.provinceLinker.locked = value;
  }

  public provinceLinker: ForeignkeyLinker<Province>;

}
