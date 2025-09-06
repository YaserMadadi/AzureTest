
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { BackgroundCheckStatus, BackgroundCheckStatus_ServiceCollection } from '../../backgroundCheckStatus';
import { IndividualProvider, IndividualProvider_Builder } from '../../individualProvider';
import { IndividualProviderEditUI } from '../../individualProvider/edit/individualProvider.edit'
import { IndividualProviderDeleteUI } from '../../individualProvider/delete/individualProvider.delete'
import { Gender, Gender_Service } from '../../gender';
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-backgroundCheckStatus-individualProvider-detail',
  templateUrl: './backgroundCheckStatus-individualProvider.detail.html',
  styleUrls: ['./backgroundCheckStatus-individualProvider.detail.scss'],
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
export class BackgroundCheckStatus_IndividualProvider_DetailUI extends DetailUI<BackgroundCheckStatus, IndividualProvider> {

  constructor(private serviceCollection: BackgroundCheckStatus_ServiceCollection = inject(BackgroundCheckStatus_ServiceCollection)) {
    super(serviceCollection.CollectionOfIndividualProvider.bind(serviceCollection), inject(IndividualProvider_Builder));
    this.currentInstance = new IndividualProvider();
  }

  @Input()
  public set backgroundCheckStatus(value: BackgroundCheckStatus) {
    this.masterInstance = { ...value };
    //this.currentInstance.backgroundCheckStatus = { ...value };
    this.sourceInstance.backgroundCheckStatus = { ...value };
  }

  public genderLinker: ForeignkeyLinker<Gender> = new ForeignkeyLinker<Gender>(inject(Gender_Service), true);

		public idLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
