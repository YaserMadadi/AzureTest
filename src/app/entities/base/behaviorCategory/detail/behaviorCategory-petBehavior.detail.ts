
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { BehaviorCategory, BehaviorCategory_ServiceCollection } from '../../behaviorCategory';
import { PetBehavior, PetBehavior_Builder } from '../../petBehavior';
import { PetBehaviorEditUI } from '../../petBehavior/edit/petBehavior.edit'
import { PetBehaviorDeleteUI } from '../../petBehavior/delete/petBehavior.delete'
import { Pet, Pet_Service } from '../../pet';



@Component({
  selector: 'base-behaviorCategory-petBehavior-detail',
  templateUrl: './behaviorCategory-petBehavior.detail.html',
  styleUrls: ['./behaviorCategory-petBehavior.detail.scss'],
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
export class BehaviorCategory_PetBehavior_DetailUI extends DetailUI<BehaviorCategory, PetBehavior> {

  constructor(private serviceCollection: BehaviorCategory_ServiceCollection = inject(BehaviorCategory_ServiceCollection)) {
    super(serviceCollection.CollectionOfPetBehavior.bind(serviceCollection), inject(PetBehavior_Builder));
    this.currentInstance = new PetBehavior();
  }

  @Input()
  public set behaviorCategory(value: BehaviorCategory) {
    this.masterInstance = { ...value };
    //this.currentInstance.behaviorCategory = { ...value };
    this.sourceInstance.behaviorCategory = { ...value };
  }

  public petLinker: ForeignkeyLinker<Pet> = new ForeignkeyLinker<Pet>(inject(Pet_Service), true);

		

}
