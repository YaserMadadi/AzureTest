
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Client, Client_ServiceCollection } from '../../client';
import { Pet, Pet_Builder } from '../../pet';
import { PetEditUI } from '../../pet/edit/pet.edit'
import { PetDeleteUI } from '../../pet/delete/pet.delete'
import { Gender, Gender_Service } from '../../gender';
import { WeightUnit, WeightUnit_Service } from '../../weightUnit';



@Component({
  selector: 'base-client-pet-detail',
  templateUrl: './client-pet.detail.html',
  styleUrls: ['./client-pet.detail.scss'],
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
export class Client_Pet_DetailUI extends DetailUI<Client, Pet> {

  constructor(private serviceCollection: Client_ServiceCollection = inject(Client_ServiceCollection)) {
    super(serviceCollection.CollectionOfPet.bind(serviceCollection), inject(Pet_Builder));
    this.currentInstance = new Pet();
  }

  @Input()
  public set client(value: Client) {
    this.masterInstance = { ...value };
    //this.currentInstance.client = { ...value };
    this.sourceInstance.client = { ...value };
  }

  public genderLinker: ForeignkeyLinker<Gender> = new ForeignkeyLinker<Gender>(inject(Gender_Service), true);

		public weightUnitLinker: ForeignkeyLinker<WeightUnit> = new ForeignkeyLinker<WeightUnit>(inject(WeightUnit_Service), true);

		

}
