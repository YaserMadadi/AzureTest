
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../provider';
import { AcceptedPetCategory, AcceptedPetCategory_Builder } from '../../acceptedPetCategory';
import { AcceptedPetCategoryEditUI } from '../../acceptedPetCategory/edit/acceptedPetCategory.edit'
import { AcceptedPetCategoryDeleteUI } from '../../acceptedPetCategory/delete/acceptedPetCategory.delete'
import { PetCategory, PetCategory_Service } from '../../petCategory';



@Component({
  selector: 'base-provider-acceptedPetCategory-detail',
  templateUrl: './provider-acceptedPetCategory.detail.html',
  styleUrls: ['./provider-acceptedPetCategory.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    AcceptedPetCategoryEditUI,        
    AcceptedPetCategoryDeleteUI,
  ]
}) 
export class Provider_AcceptedPetCategory_DetailUI extends DetailUI<Provider, AcceptedPetCategory> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfAcceptedPetCategory.bind(serviceCollection), inject(AcceptedPetCategory_Builder));
    this.currentInstance = new AcceptedPetCategory();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  public petCategoryLinker: ForeignkeyLinker<PetCategory> = new ForeignkeyLinker<PetCategory>(inject(PetCategory_Service), true);

		

}
