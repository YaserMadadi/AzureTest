
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { MedicationType, MedicationType_ServiceCollection } from '../../medicationType';
import { PetMedicalCondition, PetMedicalCondition_Builder } from '../../petMedicalCondition';
import { PetMedicalConditionEditUI } from '../../petMedicalCondition/edit/petMedicalCondition.edit'
import { PetMedicalConditionDeleteUI } from '../../petMedicalCondition/delete/petMedicalCondition.delete'
import { Pet, Pet_Service } from '../../pet';



@Component({
  selector: 'base-medicationType-petMedicalCondition-detail',
  templateUrl: './medicationType-petMedicalCondition.detail.html',
  styleUrls: ['./medicationType-petMedicalCondition.detail.scss'],
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
export class MedicationType_PetMedicalCondition_DetailUI extends DetailUI<MedicationType, PetMedicalCondition> {

  constructor(private serviceCollection: MedicationType_ServiceCollection = inject(MedicationType_ServiceCollection)) {
    super(serviceCollection.CollectionOfPetMedicalCondition.bind(serviceCollection), inject(PetMedicalCondition_Builder));
    this.currentInstance = new PetMedicalCondition();
  }

  @Input()
  public set medicationType(value: MedicationType) {
    this.masterInstance = { ...value };
    //this.currentInstance.medicationType = { ...value };
    this.sourceInstance.medicationType = { ...value };
  }

  public petLinker: ForeignkeyLinker<Pet> = new ForeignkeyLinker<Pet>(inject(Pet_Service), true);

		

}
