

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { AcceptedPetCategory, AcceptedPetCategory_Service } from '..';
import { PetCategory } from '../../petCategory';
import { Provider } from '../../provider';



@Component({
  selector: 'base-acceptedPetCategory-edit',
  templateUrl: './acceptedPetCategory.edit.html',
  styleUrls: ['./acceptedPetCategory.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class AcceptedPetCategoryEditUI extends EditUI<AcceptedPetCategory> {
    
  constructor(public override service: AcceptedPetCategory_Service = inject(AcceptedPetCategory_Service )) {
    super(service); 
    this.petCategoryLinker = new ForeignkeyLinker<PetCategory>(this.service.petCategoryService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
  }

  @Input() 
  set petCategoryLocked(value: boolean) {
    this.petCategoryLinker.locked = value;
  }

	@Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

  public petCategoryLinker: ForeignkeyLinker<PetCategory>;

	public providerLinker: ForeignkeyLinker<Provider>;

}
