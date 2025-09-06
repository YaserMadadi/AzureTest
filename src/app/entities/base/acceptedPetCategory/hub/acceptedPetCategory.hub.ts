

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { AcceptedPetCategory, AcceptedPetCategory_Service } from '..';
import { AcceptedPetCategoryEditUI } from '../edit/acceptedPetCategory.edit'
import { AcceptedPetCategoryDeleteUI } from '../delete/acceptedPetCategory.delete'
import { PetCategory } from '../../petCategory';
import { Provider } from '../../provider';



@Component({
  selector: 'base-acceptedPetCategory-index',
  templateUrl: './acceptedPetCategory.hub.html',
  styleUrls: ['./acceptedPetCategory.hub.scss'],
  providers: [AcceptedPetCategory_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    AcceptedPetCategoryEditUI,
    AcceptedPetCategoryDeleteUI,
    LookupComponent,
  ]
})
export class AcceptedPetCategoryHubUI extends HubUI<AcceptedPetCategory> implements IHubUI<AcceptedPetCategory> {

  constructor(public override service: AcceptedPetCategory_Service = inject(AcceptedPetCategory_Service)) {
    super(service);
    this.petCategoryLinker = new ForeignkeyLinker<PetCategory>(this.service.petCategoryService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Pet Category', () => this.navigateToUrl('/base/petCategory')),
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
		];
  }

  public petCategoryLinker: ForeignkeyLinker<PetCategory>;

	public providerLinker: ForeignkeyLinker<Provider>;

  

}
