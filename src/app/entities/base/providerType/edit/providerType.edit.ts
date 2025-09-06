

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ProviderType, ProviderType_Service } from '..';



@Component({
  selector: 'base-providerType-edit',
  templateUrl: './providerType.edit.html',
  styleUrls: ['./providerType.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class ProviderTypeEditUI extends EditUI<ProviderType> {
    
  constructor(public override service: ProviderType_Service = inject(ProviderType_Service )) {
    super(service); 
    
  }

  

  

}
