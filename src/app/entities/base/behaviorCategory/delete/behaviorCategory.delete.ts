

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { BehaviorCategory, BehaviorCategory_Service } from '..';


@Component({
  selector: 'base-behaviorCategory-delete',
  templateUrl: './behaviorCategory.delete.html',
  styleUrls: ['./behaviorCategory.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class BehaviorCategoryDeleteUI extends DeleteUI<BehaviorCategory> implements IDeleteUI<BehaviorCategory> {

  constructor() {
    super(inject(BehaviorCategory_Service));
  }

}
