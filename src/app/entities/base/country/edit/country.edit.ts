

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Country, Country_Service } from '..';



@Component({
  selector: 'base-country-edit',
  templateUrl: './country.edit.html',
  styleUrls: ['./country.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class CountryEditUI extends EditUI<Country> {
    
  constructor(public override service: Country_Service = inject(Country_Service )) {
    super(service); 
    
  }

  

  

}
