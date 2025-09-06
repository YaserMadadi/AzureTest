
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Role, Role_ServiceCollection } from '../../role';
import { RolePermission, RolePermission_Builder } from '../../rolePermission';
import { RolePermissionEditUI } from '../../rolePermission/edit/rolePermission.edit'
import { RolePermissionDeleteUI } from '../../rolePermission/delete/rolePermission.delete'
import { Entity, Entity_Service } from '../../../infra/entity';



@Component({
  selector: 'admin-role-rolePermission-detail',
  templateUrl: './role-rolePermission.detail.html',
  styleUrls: ['./role-rolePermission.detail.scss'],
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
export class Role_RolePermission_DetailUI extends DetailUI<Role, RolePermission> {

  constructor(private serviceCollection: Role_ServiceCollection = inject(Role_ServiceCollection)) {
    super(serviceCollection.CollectionOfRolePermission.bind(serviceCollection), inject(RolePermission_Builder));
    this.currentInstance = new RolePermission();
  }

  @Input()
  public set role(value: Role) {
    this.masterInstance = { ...value };
    //this.currentInstance.role = { ...value };
    this.sourceInstance.role = { ...value };
  }

  public entityLinker: ForeignkeyLinker<Entity> = new ForeignkeyLinker<Entity>(inject(Entity_Service), true);

		

}
