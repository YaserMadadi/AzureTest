

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Province, Province_Service } from '..';
import { Country } from '../../country';



@Component({
  selector: 'base-province-edit',
  templateUrl: './province.edit.html',
  styleUrls: ['./province.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ProvinceEditUI extends EditUI<Province> {
    
  constructor(public override service: Province_Service = inject(Province_Service )) {
    super(service); 
    this.countryLinker = new ForeignkeyLinker<Country>(this.service.countryService, true);
  }

  @Input() 
  set countryLocked(value: boolean) {
    this.countryLinker.locked = value;
  }

  public countryLinker: ForeignkeyLinker<Country>;

}
