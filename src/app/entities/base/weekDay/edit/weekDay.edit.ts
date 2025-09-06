

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { WeekDay, WeekDay_Service } from '..';



@Component({
  selector: 'base-weekDay-edit',
  templateUrl: './weekDay.edit.html',
  styleUrls: ['./weekDay.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class WeekDayEditUI extends EditUI<WeekDay> {
    
  constructor(public override service: WeekDay_Service = inject(WeekDay_Service )) {
    super(service); 
    
  }

  

  

}
