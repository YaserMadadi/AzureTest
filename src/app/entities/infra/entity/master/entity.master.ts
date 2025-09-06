import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Entity, Entity_Service } from '..';
import { Entity_RolePermission_DetailUI } from '../detail/entity-rolePermission.detail';
import { Entity_StaffPermission_DetailUI } from '../detail/entity-staffPermission.detail';



@Component({
  selector: 'infra-entity-master',
  templateUrl: './entity.master.html',
  styleUrls: ['./entity.master.scss'],
  providers: [
    Entity_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //EntityEditUI,        
    //EntityDeleteUI,
    Entity_RolePermission_DetailUI,
				Entity_StaffPermission_DetailUI
  ]
})
export class EntityMasterUI extends MasterUI<Entity> implements IMasterUI<Entity> {

  constructor() {
    super(inject(Entity_Service))
  }


}
