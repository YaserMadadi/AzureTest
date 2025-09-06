

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { PetMedicalCondition, PetMedicalCondition_Service } from '..';
import { MedicationType } from '../../medicationType';
import { Pet } from '../../pet';



@Component({
  selector: 'base-petMedicalCondition-edit',
  templateUrl: './petMedicalCondition.edit.html',
  styleUrls: ['./petMedicalCondition.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class PetMedicalConditionEditUI extends EditUI<PetMedicalCondition> {
    
  constructor(public override service: PetMedicalCondition_Service = inject(PetMedicalCondition_Service )) {
    super(service); 
    this.medicationTypeLinker = new ForeignkeyLinker<MedicationType>(this.service.medicationTypeService, true);
		this.petLinker = new ForeignkeyLinker<Pet>(this.service.petService, true);
  }

  @Input() 
  set medicationTypeLocked(value: boolean) {
    this.medicationTypeLinker.locked = value;
  }

	@Input() 
  set petLocked(value: boolean) {
    this.petLinker.locked = value;
  }

  public medicationTypeLinker: ForeignkeyLinker<MedicationType>;

	public petLinker: ForeignkeyLinker<Pet>;

}
