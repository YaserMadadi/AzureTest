

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { BehaviorCategory, BehaviorCategory_Service } from '..';
import { BehaviorCategoryEditUI } from '../edit/behaviorCategory.edit'
import { BehaviorCategoryDeleteUI } from '../delete/behaviorCategory.delete'
import { PetBehavior } from '../../petBehavior';
import { PetBehaviorEditUI } from '../../petBehavior/edit/petBehavior.edit';



@Component({
  selector: 'base-behaviorCategory-index',
  templateUrl: './behaviorCategory.hub.html',
  styleUrls: ['./behaviorCategory.hub.scss'],
  providers: [BehaviorCategory_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    BehaviorCategoryEditUI,
    BehaviorCategoryDeleteUI,
    PetBehaviorEditUI,
  ]
})
export class BehaviorCategoryHubUI extends HubUI<BehaviorCategory> implements IHubUI<BehaviorCategory> {

  constructor(public override service: BehaviorCategory_Service = inject(BehaviorCategory_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Pet Behavior', () => this.onAddPetBehavior()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('petBehaviorEditUI')
  public petBehaviorEditUI!: PetBehaviorEditUI;

  onAddPetBehavior() {
    let petBehavior = new PetBehavior();
    petBehavior.behaviorCategory = this.currentInstance;
    this.petBehaviorEditUI.Show(petBehavior);
  }


}
