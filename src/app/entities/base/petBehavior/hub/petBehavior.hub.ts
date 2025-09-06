

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { PetBehavior, PetBehavior_Service } from '..';
import { PetBehaviorEditUI } from '../edit/petBehavior.edit'
import { PetBehaviorDeleteUI } from '../delete/petBehavior.delete'
import { BehaviorCategory } from '../../behaviorCategory';
import { Pet } from '../../pet';



@Component({
  selector: 'base-petBehavior-index',
  templateUrl: './petBehavior.hub.html',
  styleUrls: ['./petBehavior.hub.scss'],
  providers: [PetBehavior_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    PetBehaviorEditUI,
    PetBehaviorDeleteUI,
    LookupComponent,
  ]
})
export class PetBehaviorHubUI extends HubUI<PetBehavior> implements IHubUI<PetBehavior> {

  constructor(public override service: PetBehavior_Service = inject(PetBehavior_Service)) {
    super(service);
    this.behaviorCategoryLinker = new ForeignkeyLinker<BehaviorCategory>(this.service.behaviorCategoryService, true);
		this.petLinker = new ForeignkeyLinker<Pet>(this.service.petService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Behavior Category', () => this.navigateToUrl('/base/behaviorCategory')),
			new DropdownMenuItem('Manage  Pet', () => this.navigateToUrl('/base/pet')),
		];
  }

  public behaviorCategoryLinker: ForeignkeyLinker<BehaviorCategory>;

	public petLinker: ForeignkeyLinker<Pet>;

  

}
