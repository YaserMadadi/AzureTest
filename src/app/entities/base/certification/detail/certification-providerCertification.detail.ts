
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Certification, Certification_ServiceCollection } from '../../certification';
import { ProviderCertification, ProviderCertification_Builder } from '../../providerCertification';
import { ProviderCertificationEditUI } from '../../providerCertification/edit/providerCertification.edit'
import { ProviderCertificationDeleteUI } from '../../providerCertification/delete/providerCertification.delete'
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-certification-providerCertification-detail',
  templateUrl: './certification-providerCertification.detail.html',
  styleUrls: ['./certification-providerCertification.detail.scss'],
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
export class Certification_ProviderCertification_DetailUI extends DetailUI<Certification, ProviderCertification> {

  constructor(private serviceCollection: Certification_ServiceCollection = inject(Certification_ServiceCollection)) {
    super(serviceCollection.CollectionOfProviderCertification.bind(serviceCollection), inject(ProviderCertification_Builder));
    this.currentInstance = new ProviderCertification();
  }

  @Input()
  public set certification(value: Certification) {
    this.masterInstance = { ...value };
    //this.currentInstance.certification = { ...value };
    this.sourceInstance.certification = { ...value };
  }

  public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
