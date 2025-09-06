

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { WeightUnit, WeightUnit_Service } from '..';
import { WeightUnitEditUI } from '../edit/weightUnit.edit'
import { WeightUnitDeleteUI } from '../delete/weightUnit.delete'
import { Pet } from '../../pet';
import { PetEditUI } from '../../pet/edit/pet.edit';



@Component({
  selector: 'base-weightUnit-index',
  templateUrl: './weightUnit.hub.html',
  styleUrls: ['./weightUnit.hub.scss'],
  providers: [WeightUnit_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    WeightUnitEditUI,
    WeightUnitDeleteUI,
    PetEditUI,
  ]
})
export class WeightUnitHubUI extends HubUI<WeightUnit> implements IHubUI<WeightUnit> {

  constructor(public override service: WeightUnit_Service = inject(WeightUnit_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Pet', () => this.onAddPet()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('petEditUI')
  public petEditUI!: PetEditUI;

  onAddPet() {
    let pet = new Pet();
    pet.weightUnit = this.currentInstance;
    this.petEditUI.Show(pet);
  }


}
