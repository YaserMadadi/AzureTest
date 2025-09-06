
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Pet, Pet_ServiceCollection } from '../../pet';
import { PetMedicalCondition, PetMedicalCondition_Builder } from '../../petMedicalCondition';
import { PetMedicalConditionEditUI } from '../../petMedicalCondition/edit/petMedicalCondition.edit'
import { PetMedicalConditionDeleteUI } from '../../petMedicalCondition/delete/petMedicalCondition.delete'
import { MedicationType, MedicationType_Service } from '../../medicationType';



@Component({
  selector: 'base-pet-petMedicalCondition-detail',
  templateUrl: './pet-petMedicalCondition.detail.html',
  styleUrls: ['./pet-petMedicalCondition.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    PetMedicalConditionEditUI,        
    PetMedicalConditionDeleteUI,
  ]
}) 
export class Pet_PetMedicalCondition_DetailUI extends DetailUI<Pet, PetMedicalCondition> {

  constructor(private serviceCollection: Pet_ServiceCollection = inject(Pet_ServiceCollection)) {
    super(serviceCollection.CollectionOfPetMedicalCondition.bind(serviceCollection), inject(PetMedicalCondition_Builder));
    this.currentInstance = new PetMedicalCondition();
  }

  @Input()
  public set pet(value: Pet) {
    this.masterInstance = { ...value };
    //this.currentInstance.pet = { ...value };
    this.sourceInstance.pet = { ...value };
  }

  public medicationTypeLinker: ForeignkeyLinker<MedicationType> = new ForeignkeyLinker<MedicationType>(inject(MedicationType_Service), true);

		

}
