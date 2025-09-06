

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { PetCategory, PetCategory_Service } from '..';
import { PetCategoryEditUI } from '../edit/petCategory.edit'
import { PetCategoryDeleteUI } from '../delete/petCategory.delete'
import { AcceptedPetCategory } from '../../acceptedPetCategory';
import { AcceptedPetCategoryEditUI } from '../../acceptedPetCategory/edit/acceptedPetCategory.edit';



@Component({
  selector: 'base-petCategory-index',
  templateUrl: './petCategory.hub.html',
  styleUrls: ['./petCategory.hub.scss'],
  providers: [PetCategory_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    PetCategoryEditUI,
    PetCategoryDeleteUI,
    AcceptedPetCategoryEditUI,
  ]
})
export class PetCategoryHubUI extends HubUI<PetCategory> implements IHubUI<PetCategory> {

  constructor(public override service: PetCategory_Service = inject(PetCategory_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Accepted Pet Category', () => this.onAddAcceptedPetCategory()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('acceptedPetCategoryEditUI')
  public acceptedPetCategoryEditUI!: AcceptedPetCategoryEditUI;

  onAddAcceptedPetCategory() {
    let acceptedPetCategory = new AcceptedPetCategory();
    acceptedPetCategory.petCategory = this.currentInstance;
    this.acceptedPetCategoryEditUI.Show(acceptedPetCategory);
  }


}
