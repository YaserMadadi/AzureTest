

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ServiceType, ServiceType_Service } from '..';



@Component({
  selector: 'base-serviceType-edit',
  templateUrl: './serviceType.edit.html',
  styleUrls: ['./serviceType.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class ServiceTypeEditUI extends EditUI<ServiceType> {
    
  constructor(public override service: ServiceType_Service = inject(ServiceType_Service )) {
    super(service); 
    
  }

  

  

}
