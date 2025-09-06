

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Pet, Pet_Service } from '..';
import { Client } from '../../client';
import { Gender } from '../../gender';
import { WeightUnit } from '../../weightUnit';



@Component({
  selector: 'base-pet-edit',
  templateUrl: './pet.edit.html',
  styleUrls: ['./pet.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class PetEditUI extends EditUI<Pet> {
    
  constructor(public override service: Pet_Service = inject(Pet_Service )) {
    super(service); 
    this.clientLinker = new ForeignkeyLinker<Client>(this.service.clientService, true);
		this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, true);
		this.weightUnitLinker = new ForeignkeyLinker<WeightUnit>(this.service.weightUnitService, true);
  }

  @Input() 
  set clientLocked(value: boolean) {
    this.clientLinker.locked = value;
  }

	@Input() 
  set genderLocked(value: boolean) {
    this.genderLinker.locked = value;
  }

	@Input() 
  set weightUnitLocked(value: boolean) {
    this.weightUnitLinker.locked = value;
  }

  public clientLinker: ForeignkeyLinker<Client>;

	public genderLinker: ForeignkeyLinker<Gender>;

	public weightUnitLinker: ForeignkeyLinker<WeightUnit>;

}
