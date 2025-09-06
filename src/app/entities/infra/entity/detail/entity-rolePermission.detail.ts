
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Entity, Entity_ServiceCollection } from '../../../infra/entity';
import { RolePermission, RolePermission_Builder } from '../../../admin/rolePermission';
import { RolePermissionEditUI } from '../../../admin/rolePermission/edit/rolePermission.edit'
import { RolePermissionDeleteUI } from '../../../admin/rolePermission/delete/rolePermission.delete'
import { Role, Role_Service } from '../../../admin/role';



@Component({
  selector: 'infra-entity-rolePermission-detail',
  templateUrl: './entity-rolePermission.detail.html',
  styleUrls: ['./entity-rolePermission.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    RolePermissionEditUI,        
    RolePermissionDeleteUI,
  ]
}) 
export class Entity_RolePermission_DetailUI extends DetailUI<Entity, RolePermission> {

  constructor(private serviceCollection: Entity_ServiceCollection = inject(Entity_ServiceCollection)) {
    super(serviceCollection.CollectionOfRolePermission.bind(serviceCollection), inject(RolePermission_Builder));
    this.currentInstance = new RolePermission();
  }

  @Input()
  public set entity(value: Entity) {
    this.masterInstance = { ...value };
    //this.currentInstance.entity = { ...value };
    this.sourceInstance.entity = { ...value };
  }

  public roleLinker: ForeignkeyLinker<Role> = new ForeignkeyLinker<Role>(inject(Role_Service), true);

		

}
