

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { PriceScope, PriceScope_Service } from '..';



@Component({
  selector: 'base-priceScope-edit',
  templateUrl: './priceScope.edit.html',
  styleUrls: ['./priceScope.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class PriceScopeEditUI extends EditUI<PriceScope> {
    
  constructor(public override service: PriceScope_Service = inject(PriceScope_Service )) {
    super(service); 
    
  }

  

  

}
