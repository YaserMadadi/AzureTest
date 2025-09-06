
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { WeightUnit, WeightUnit_ServiceCollection } from '../../weightUnit';
import { Pet, Pet_Builder } from '../../pet';
import { PetEditUI } from '../../pet/edit/pet.edit'
import { PetDeleteUI } from '../../pet/delete/pet.delete'
import { Client, Client_Service } from '../../client';
import { Gender, Gender_Service } from '../../gender';



@Component({
  selector: 'base-weightUnit-pet-detail',
  templateUrl: './weightUnit-pet.detail.html',
  styleUrls: ['./weightUnit-pet.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    PetEditUI,        
    PetDeleteUI,
  ]
}) 
export class WeightUnit_Pet_DetailUI extends DetailUI<WeightUnit, Pet> {

  constructor(private serviceCollection: WeightUnit_ServiceCollection = inject(WeightUnit_ServiceCollection)) {
    super(serviceCollection.CollectionOfPet.bind(serviceCollection), inject(Pet_Builder));
    this.currentInstance = new Pet();
  }

  @Input()
  public set weightUnit(value: WeightUnit) {
    this.masterInstance = { ...value };
    //this.currentInstance.weightUnit = { ...value };
    this.sourceInstance.weightUnit = { ...value };
  }

  public clientLinker: ForeignkeyLinker<Client> = new ForeignkeyLinker<Client>(inject(Client_Service), true);

		public genderLinker: ForeignkeyLinker<Gender> = new ForeignkeyLinker<Gender>(inject(Gender_Service), true);

		

}
