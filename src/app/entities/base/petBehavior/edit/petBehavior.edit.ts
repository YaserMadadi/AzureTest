

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { PetBehavior, PetBehavior_Service } from '..';
import { BehaviorCategory } from '../../behaviorCategory';
import { Pet } from '../../pet';



@Component({
  selector: 'base-petBehavior-edit',
  templateUrl: './petBehavior.edit.html',
  styleUrls: ['./petBehavior.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class PetBehaviorEditUI extends EditUI<PetBehavior> {
    
  constructor(public override service: PetBehavior_Service = inject(PetBehavior_Service )) {
    super(service); 
    this.behaviorCategoryLinker = new ForeignkeyLinker<BehaviorCategory>(this.service.behaviorCategoryService, true);
		this.petLinker = new ForeignkeyLinker<Pet>(this.service.petService, true);
  }

  @Input() 
  set behaviorCategoryLocked(value: boolean) {
    this.behaviorCategoryLinker.locked = value;
  }

	@Input() 
  set petLocked(value: boolean) {
    this.petLinker.locked = value;
  }

  public behaviorCategoryLinker: ForeignkeyLinker<BehaviorCategory>;

	public petLinker: ForeignkeyLinker<Pet>;

}
