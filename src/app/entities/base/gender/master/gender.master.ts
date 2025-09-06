import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Gender, Gender_Service } from '..';
import { Gender_Staff_DetailUI } from '../detail/gender-staff.detail';
import { Gender_Client_DetailUI } from '../detail/gender-client.detail';
import { Gender_IndividualProvider_DetailUI } from '../detail/gender-individualProvider.detail';
import { Gender_Pet_DetailUI } from '../detail/gender-pet.detail';



@Component({
  selector: 'base-gender-master',
  templateUrl: './gender.master.html',
  styleUrls: ['./gender.master.scss'],
  providers: [
    Gender_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //GenderEditUI,        
    //GenderDeleteUI,
    Gender_Staff_DetailUI,
				Gender_Client_DetailUI,
				Gender_IndividualProvider_DetailUI,
				Gender_Pet_DetailUI
  ]
})
export class GenderMasterUI extends MasterUI<Gender> implements IMasterUI<Gender> {

  constructor() {
    super(inject(Gender_Service))
  }


}
