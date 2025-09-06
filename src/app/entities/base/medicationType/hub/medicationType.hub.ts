

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { MedicationType, MedicationType_Service } from '..';
import { MedicationTypeEditUI } from '../edit/medicationType.edit'
import { MedicationTypeDeleteUI } from '../delete/medicationType.delete'
import { PetMedicalCondition } from '../../petMedicalCondition';
import { PetMedicalConditionEditUI } from '../../petMedicalCondition/edit/petMedicalCondition.edit';



@Component({
  selector: 'base-medicationType-index',
  templateUrl: './medicationType.hub.html',
  styleUrls: ['./medicationType.hub.scss'],
  providers: [MedicationType_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    MedicationTypeEditUI,
    MedicationTypeDeleteUI,
    PetMedicalConditionEditUI,
  ]
})
export class MedicationTypeHubUI extends HubUI<MedicationType> implements IHubUI<MedicationType> {

  constructor(public override service: MedicationType_Service = inject(MedicationType_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Pet Medical Condition', () => this.onAddPetMedicalCondition()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('petMedicalConditionEditUI')
  public petMedicalConditionEditUI!: PetMedicalConditionEditUI;

  onAddPetMedicalCondition() {
    let petMedicalCondition = new PetMedicalCondition();
    petMedicalCondition.medicationType = this.currentInstance;
    this.petMedicalConditionEditUI.Show(petMedicalCondition);
  }


}
