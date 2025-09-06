import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Pet, Pet_Service } from '..';
import { Pet_Booking_DetailUI } from '../detail/pet-booking.detail';
import { Pet_PetBehavior_DetailUI } from '../detail/pet-petBehavior.detail';
import { Pet_PetMedicalCondition_DetailUI } from '../detail/pet-petMedicalCondition.detail';



@Component({
  selector: 'base-pet-master',
  templateUrl: './pet.master.html',
  styleUrls: ['./pet.master.scss'],
  providers: [
    Pet_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //PetEditUI,        
    //PetDeleteUI,
    Pet_Booking_DetailUI,
				Pet_PetBehavior_DetailUI,
				Pet_PetMedicalCondition_DetailUI
  ]
})
export class PetMasterUI extends MasterUI<Pet> implements IMasterUI<Pet> {

  constructor() {
    super(inject(Pet_Service))
  }


}
