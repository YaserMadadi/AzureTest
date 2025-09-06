
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { PetCategory, PetCategory_ServiceCollection } from '../../petCategory';
import { AcceptedPetCategory, AcceptedPetCategory_Builder } from '../../acceptedPetCategory';
import { AcceptedPetCategoryEditUI } from '../../acceptedPetCategory/edit/acceptedPetCategory.edit'
import { AcceptedPetCategoryDeleteUI } from '../../acceptedPetCategory/delete/acceptedPetCategory.delete'
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-petCategory-acceptedPetCategory-detail',
  templateUrl: './petCategory-acceptedPetCategory.detail.html',
  styleUrls: ['./petCategory-acceptedPetCategory.detail.scss'],
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
export class PetCategory_AcceptedPetCategory_DetailUI extends DetailUI<PetCategory, AcceptedPetCategory> {

  constructor(private serviceCollection: PetCategory_ServiceCollection = inject(PetCategory_ServiceCollection)) {
    super(serviceCollection.CollectionOfAcceptedPetCategory.bind(serviceCollection), inject(AcceptedPetCategory_Builder));
    this.currentInstance = new AcceptedPetCategory();
  }

  @Input()
  public set petCategory(value: PetCategory) {
    this.masterInstance = { ...value };
    //this.currentInstance.petCategory = { ...value };
    this.sourceInstance.petCategory = { ...value };
  }

  public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
