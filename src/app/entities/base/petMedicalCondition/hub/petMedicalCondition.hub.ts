

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { PetMedicalCondition, PetMedicalCondition_Service } from '..';
import { PetMedicalConditionEditUI } from '../edit/petMedicalCondition.edit'
import { PetMedicalConditionDeleteUI } from '../delete/petMedicalCondition.delete'
import { MedicationType } from '../../medicationType';
import { Pet } from '../../pet';



@Component({
  selector: 'base-petMedicalCondition-index',
  templateUrl: './petMedicalCondition.hub.html',
  styleUrls: ['./petMedicalCondition.hub.scss'],
  providers: [PetMedicalCondition_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    PetMedicalConditionEditUI,
    PetMedicalConditionDeleteUI,
    LookupComponent,
  ]
})
export class PetMedicalConditionHubUI extends HubUI<PetMedicalCondition> implements IHubUI<PetMedicalCondition> {

  constructor(public override service: PetMedicalCondition_Service = inject(PetMedicalCondition_Service)) {
    super(service);
    this.medicationTypeLinker = new ForeignkeyLinker<MedicationType>(this.service.medicationTypeService, true);
		this.petLinker = new ForeignkeyLinker<Pet>(this.service.petService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Medication Type', () => this.navigateToUrl('/base/medicationType')),
			new DropdownMenuItem('Manage  Pet', () => this.navigateToUrl('/base/pet')),
		];
  }

  public medicationTypeLinker: ForeignkeyLinker<MedicationType>;

	public petLinker: ForeignkeyLinker<Pet>;

  

}
