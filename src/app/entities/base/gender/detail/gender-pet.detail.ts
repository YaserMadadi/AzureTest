
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Gender, Gender_ServiceCollection } from '../../gender';
import { Pet, Pet_Builder } from '../../pet';
import { PetEditUI } from '../../pet/edit/pet.edit'
import { PetDeleteUI } from '../../pet/delete/pet.delete'
import { Client, Client_Service } from '../../client';
import { WeightUnit, WeightUnit_Service } from '../../weightUnit';



@Component({
  selector: 'base-gender-pet-detail',
  templateUrl: './gender-pet.detail.html',
  styleUrls: ['./gender-pet.detail.scss'],
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
export class Gender_Pet_DetailUI extends DetailUI<Gender, Pet> {

  constructor(private serviceCollection: Gender_ServiceCollection = inject(Gender_ServiceCollection)) {
    super(serviceCollection.CollectionOfPet.bind(serviceCollection), inject(Pet_Builder));
    this.currentInstance = new Pet();
  }

  @Input()
  public set gender(value: Gender) {
    this.masterInstance = { ...value };
    //this.currentInstance.gender = { ...value };
    this.sourceInstance.gender = { ...value };
  }

  public clientLinker: ForeignkeyLinker<Client> = new ForeignkeyLinker<Client>(inject(Client_Service), true);

		public weightUnitLinker: ForeignkeyLinker<WeightUnit> = new ForeignkeyLinker<WeightUnit>(inject(WeightUnit_Service), true);

		

}
