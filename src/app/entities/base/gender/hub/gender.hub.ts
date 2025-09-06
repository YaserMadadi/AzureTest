

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Gender, Gender_Service } from '..';
import { GenderEditUI } from '../edit/gender.edit'
import { GenderDeleteUI } from '../delete/gender.delete'
import { Staff } from '../../../admin/staff';
import { StaffEditUI } from '../../../admin/staff/edit/staff.edit';
import { Client } from '../../client';
import { ClientEditUI } from '../../client/edit/client.edit';
import { IndividualProvider } from '../../individualProvider';
import { IndividualProviderEditUI } from '../../individualProvider/edit/individualProvider.edit';
import { Pet } from '../../pet';
import { PetEditUI } from '../../pet/edit/pet.edit';



@Component({
  selector: 'base-gender-index',
  templateUrl: './gender.hub.html',
  styleUrls: ['./gender.hub.scss'],
  providers: [Gender_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    GenderEditUI,
    GenderDeleteUI,
    StaffEditUI,
		ClientEditUI,
		IndividualProviderEditUI,
		PetEditUI,
  ]
})
export class GenderHubUI extends HubUI<Gender> implements IHubUI<Gender> {

  constructor(public override service: Gender_Service = inject(Gender_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Staff', () => this.onAddStaff()),
			new DropdownMenuItem('Add  Client', () => this.onAddClient()),
			new DropdownMenuItem('Add  Individual Provider', () => this.onAddIndividualProvider()),
			new DropdownMenuItem('Add  Pet', () => this.onAddPet()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('staffEditUI')
  public staffEditUI!: StaffEditUI;

  onAddStaff() {
    let staff = new Staff();
    staff.gender = this.currentInstance;
    this.staffEditUI.Show(staff);
  }


	
  @ViewChild('clientEditUI')
  public clientEditUI!: ClientEditUI;

  onAddClient() {
    let client = new Client();
    client.gender = this.currentInstance;
    this.clientEditUI.Show(client);
  }


	
  @ViewChild('individualProviderEditUI')
  public individualProviderEditUI!: IndividualProviderEditUI;

  onAddIndividualProvider() {
    let individualProvider = new IndividualProvider();
    individualProvider.gender = this.currentInstance;
    this.individualProviderEditUI.Show(individualProvider);
  }


	
  @ViewChild('petEditUI')
  public petEditUI!: PetEditUI;

  onAddPet() {
    let pet = new Pet();
    pet.gender = this.currentInstance;
    this.petEditUI.Show(pet);
  }


}
