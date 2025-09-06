

import { Routes } from '@angular/router';

import { AuthGuard } from '../../../core/security/auth.gaurd';


export const admin_routes : Routes = [
  
    { 
        path: 'menu', 
        loadComponent: () => import('./menu/hub/menu.hub').then(m => m.MenuHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }  
    },
    {
        path: 'menu/:id',
        loadComponent: () => import('./menu/master/menu.master').then(m => m.MenuMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'menuitem', 
        loadComponent: () => import('./menuItem/hub/menuItem.hub').then(m => m.MenuItemHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'MenuItem' }  
    },
    {
        path: 'menuitem/:id',
        loadComponent: () => import('./menuItem/master/menuItem.master').then(m => m.MenuItemMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'role', 
        loadComponent: () => import('./role/hub/role.hub').then(m => m.RoleHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Role' }  
    },
    {
        path: 'role/:id',
        loadComponent: () => import('./role/master/role.master').then(m => m.RoleMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'rolemember', 
        loadComponent: () => import('./roleMember/hub/roleMember.hub').then(m => m.RoleMemberHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'RoleMember' }  
    },
    {
        path: 'rolemember/:id',
        loadComponent: () => import('./roleMember/master/roleMember.master').then(m => m.RoleMemberMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'rolepermission', 
        loadComponent: () => import('./rolePermission/hub/rolePermission.hub').then(m => m.RolePermissionHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'RolePermission' }  
    },
    {
        path: 'rolepermission/:id',
        loadComponent: () => import('./rolePermission/master/rolePermission.master').then(m => m.RolePermissionMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'staff', 
        loadComponent: () => import('./staff/hub/staff.hub').then(m => m.StaffHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Staff' }  
    },
    {
        path: 'staff/:id',
        loadComponent: () => import('./staff/master/staff.master').then(m => m.StaffMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'staffpermission', 
        loadComponent: () => import('./staffPermission/hub/staffPermission.hub').then(m => m.StaffPermissionHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'StaffPermission' }  
    },
    {
        path: 'staffpermission/:id',
        loadComponent: () => import('./staffPermission/master/staffPermission.master').then(m => m.StaffPermissionMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'usertype', 
        loadComponent: () => import('./userType/hub/userType.hub').then(m => m.UserTypeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'UserType' }  
    },
    {
        path: 'usertype/:id',
        loadComponent: () => import('./userType/master/userType.master').then(m => m.UserTypeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
];

//   ****    should be added into root.routes.ts
//  { path: 'Admin', loadChildren: () => import('./entities/admin/admin.routes').then(x => x.admin_routes) }