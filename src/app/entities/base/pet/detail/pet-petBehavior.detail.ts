
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Pet, Pet_ServiceCollection } from '../../pet';
import { PetBehavior, PetBehavior_Builder } from '../../petBehavior';
import { PetBehaviorEditUI } from '../../petBehavior/edit/petBehavior.edit'
import { PetBehaviorDeleteUI } from '../../petBehavior/delete/petBehavior.delete'
import { BehaviorCategory, BehaviorCategory_Service } from '../../behaviorCategory';



@Component({
  selector: 'base-pet-petBehavior-detail',
  templateUrl: './pet-petBehavior.detail.html',
  styleUrls: ['./pet-petBehavior.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    PetBehaviorEditUI,        
    PetBehaviorDeleteUI,
  ]
}) 
export class Pet_PetBehavior_DetailUI extends DetailUI<Pet, PetBehavior> {

  constructor(private serviceCollection: Pet_ServiceCollection = inject(Pet_ServiceCollection)) {
    super(serviceCollection.CollectionOfPetBehavior.bind(serviceCollection), inject(PetBehavior_Builder));
    this.currentInstance = new PetBehavior();
  }

  @Input()
  public set pet(value: Pet) {
    this.masterInstance = { ...value };
    //this.currentInstance.pet = { ...value };
    this.sourceInstance.pet = { ...value };
  }

  public behaviorCategoryLinker: ForeignkeyLinker<BehaviorCategory> = new ForeignkeyLinker<BehaviorCategory>(inject(BehaviorCategory_Service), true);

		

}
