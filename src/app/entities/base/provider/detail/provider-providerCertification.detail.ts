
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../provider';
import { ProviderCertification, ProviderCertification_Builder } from '../../providerCertification';
import { ProviderCertificationEditUI } from '../../providerCertification/edit/providerCertification.edit'
import { ProviderCertificationDeleteUI } from '../../providerCertification/delete/providerCertification.delete'
import { Certification, Certification_Service } from '../../certification';



@Component({
  selector: 'base-provider-providerCertification-detail',
  templateUrl: './provider-providerCertification.detail.html',
  styleUrls: ['./provider-providerCertification.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ProviderCertificationEditUI,        
    ProviderCertificationDeleteUI,
  ]
}) 
export class Provider_ProviderCertification_DetailUI extends DetailUI<Provider, ProviderCertification> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfProviderCertification.bind(serviceCollection), inject(ProviderCertification_Builder));
    this.currentInstance = new ProviderCertification();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  public certificationLinker: ForeignkeyLinker<Certification> = new ForeignkeyLinker<Certification>(inject(Certification_Service), true);

		

}
