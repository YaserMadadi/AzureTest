
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Gender, Gender_ServiceCollection } from '../../gender';
import { IndividualProvider, IndividualProvider_Builder } from '../../individualProvider';
import { IndividualProviderEditUI } from '../../individualProvider/edit/individualProvider.edit'
import { IndividualProviderDeleteUI } from '../../individualProvider/delete/individualProvider.delete'
import { BackgroundCheckStatus, BackgroundCheckStatus_Service } from '../../backgroundCheckStatus';
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-gender-individualProvider-detail',
  templateUrl: './gender-individualProvider.detail.html',
  styleUrls: ['./gender-individualProvider.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    IndividualProviderEditUI,        
    IndividualProviderDeleteUI,
  ]
}) 
export class Gender_IndividualProvider_DetailUI extends DetailUI<Gender, IndividualProvider> {

  constructor(private serviceCollection: Gender_ServiceCollection = inject(Gender_ServiceCollection)) {
    super(serviceCollection.CollectionOfIndividualProvider.bind(serviceCollection), inject(IndividualProvider_Builder));
    this.currentInstance = new IndividualProvider();
  }

  @Input()
  public set gender(value: Gender) {
    this.masterInstance = { ...value };
    //this.currentInstance.gender = { ...value };
    this.sourceInstance.gender = { ...value };
  }

  public backgroundCheckStatusLinker: ForeignkeyLinker<BackgroundCheckStatus> = new ForeignkeyLinker<BackgroundCheckStatus>(inject(BackgroundCheckStatus_Service), true);

		public idLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
