
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { EnterpriseProvider, EnterpriseProvider_ServiceCollection } from '../../enterpriseProvider';
import { EnterpriseProviderInsurance, EnterpriseProviderInsurance_Builder } from '../../enterpriseProviderInsurance';
import { EnterpriseProviderInsuranceEditUI } from '../../enterpriseProviderInsurance/edit/enterpriseProviderInsurance.edit'
import { EnterpriseProviderInsuranceDeleteUI } from '../../enterpriseProviderInsurance/delete/enterpriseProviderInsurance.delete'



@Component({
  selector: 'base-enterpriseProvider-enterpriseProviderInsurance-detail',
  templateUrl: './enterpriseProvider-enterpriseProviderInsurance.detail.html',
  styleUrls: ['./enterpriseProvider-enterpriseProviderInsurance.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    
    EnterpriseProviderInsuranceEditUI,        
    EnterpriseProviderInsuranceDeleteUI,
  ]
}) 
export class EnterpriseProvider_EnterpriseProviderInsurance_DetailUI extends DetailUI<EnterpriseProvider, EnterpriseProviderInsurance> {

  constructor(private serviceCollection: EnterpriseProvider_ServiceCollection = inject(EnterpriseProvider_ServiceCollection)) {
    super(serviceCollection.CollectionOfEnterpriseProviderInsurance.bind(serviceCollection), inject(EnterpriseProviderInsurance_Builder));
    this.currentInstance = new EnterpriseProviderInsurance();
  }

  @Input()
  public set enterpriseProvider(value: EnterpriseProvider) {
    this.masterInstance = { ...value };
    //this.currentInstance.enterpriseProvider = { ...value };
    this.sourceInstance.enterpriseProvider = { ...value };
  }

  

}
