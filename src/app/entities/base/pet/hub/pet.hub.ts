

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Pet, Pet_Service } from '..';
import { PetEditUI } from '../edit/pet.edit'
import { PetDeleteUI } from '../delete/pet.delete'
import { Client } from '../../client';
import { Gender } from '../../gender';
import { WeightUnit } from '../../weightUnit';
import { Booking } from '../../booking';
import { BookingEditUI } from '../../booking/edit/booking.edit';
import { PetBehavior } from '../../petBehavior';
import { PetBehaviorEditUI } from '../../petBehavior/edit/petBehavior.edit';
import { PetMedicalCondition } from '../../petMedicalCondition';
import { PetMedicalConditionEditUI } from '../../petMedicalCondition/edit/petMedicalCondition.edit';



@Component({
  selector: 'base-pet-index',
  templateUrl: './pet.hub.html',
  styleUrls: ['./pet.hub.scss'],
  providers: [Pet_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    PetEditUI,
    PetDeleteUI,
    LookupComponent,
		BookingEditUI,
		PetBehaviorEditUI,
		PetMedicalConditionEditUI,
  ]
})
export class PetHubUI extends HubUI<Pet> implements IHubUI<Pet> {

  constructor(public override service: Pet_Service = inject(Pet_Service)) {
    super(service);
    this.clientLinker = new ForeignkeyLinker<Client>(this.service.clientService, true);
		this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, true);
		this.weightUnitLinker = new ForeignkeyLinker<WeightUnit>(this.service.weightUnitService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Booking', () => this.onAddBooking()),
			new DropdownMenuItem('Add  Pet Behavior', () => this.onAddPetBehavior()),
			new DropdownMenuItem('Add  Pet Medical Condition', () => this.onAddPetMedicalCondition()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Client', () => this.navigateToUrl('/base/client')),
			new DropdownMenuItem('Manage  Gender', () => this.navigateToUrl('/base/gender')),
			new DropdownMenuItem('Manage  Weight Unit', () => this.navigateToUrl('/base/weightUnit')),
		];
  }

  public clientLinker: ForeignkeyLinker<Client>;

	public genderLinker: ForeignkeyLinker<Gender>;

	public weightUnitLinker: ForeignkeyLinker<WeightUnit>;

  
  @ViewChild('bookingEditUI')
  public bookingEditUI!: BookingEditUI;

  onAddBooking() {
    let booking = new Booking();
    booking.pet = this.currentInstance;
    this.bookingEditUI.Show(booking);
  }


	
  @ViewChild('petBehaviorEditUI')
  public petBehaviorEditUI!: PetBehaviorEditUI;

  onAddPetBehavior() {
    let petBehavior = new PetBehavior();
    petBehavior.pet = this.currentInstance;
    this.petBehaviorEditUI.Show(petBehavior);
  }


	
  @ViewChild('petMedicalConditionEditUI')
  public petMedicalConditionEditUI!: PetMedicalConditionEditUI;

  onAddPetMedicalCondition() {
    let petMedicalCondition = new PetMedicalCondition();
    petMedicalCondition.pet = this.currentInstance;
    this.petMedicalConditionEditUI.Show(petMedicalCondition);
  }


}
