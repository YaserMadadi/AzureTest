

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { EnterpriseProviderInsurance, EnterpriseProviderInsurance_Service } from '..';
import { EnterpriseProvider } from '../../enterpriseProvider';



@Component({
  selector: 'base-enterpriseProviderInsurance-edit',
  templateUrl: './enterpriseProviderInsurance.edit.html',
  styleUrls: ['./enterpriseProviderInsurance.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class EnterpriseProviderInsuranceEditUI extends EditUI<EnterpriseProviderInsurance> {
    
  constructor(public override service: EnterpriseProviderInsurance_Service = inject(EnterpriseProviderInsurance_Service )) {
    super(service); 
    this.enterpriseProviderLinker = new ForeignkeyLinker<EnterpriseProvider>(this.service.enterpriseProviderService, true);
  }

  @Input() 
  set enterpriseProviderLocked(value: boolean) {
    this.enterpriseProviderLinker.locked = value;
  }

  public enterpriseProviderLinker: ForeignkeyLinker<EnterpriseProvider>;

}
