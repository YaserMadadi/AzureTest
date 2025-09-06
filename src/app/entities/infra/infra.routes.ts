

import { Routes } from '@angular/router';

import { AuthGuard } from '../../../core/security/auth.gaurd';


export const infra_routes : Routes = [
  
    { 
        path: 'checkconstraint', 
        loadComponent: () => import('./checkConstraint/hub/checkConstraint.hub').then(m => m.CheckConstraintHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'CheckConstraint' }  
    },
    {
        path: 'checkconstraint/:id',
        loadComponent: () => import('./checkConstraint/master/checkConstraint.master').then(m => m.CheckConstraintMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'entity', 
        loadComponent: () => import('./entity/hub/entity.hub').then(m => m.EntityHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Entity' }  
    },
    {
        path: 'entity/:id',
        loadComponent: () => import('./entity/master/entity.master').then(m => m.EntityMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'exceptionbackend', 
        loadComponent: () => import('./exceptionBackend/hub/exceptionBackend.hub').then(m => m.ExceptionBackendHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ExceptionBackend' }  
    },
    {
        path: 'exceptionbackend/:id',
        loadComponent: () => import('./exceptionBackend/master/exceptionBackend.master').then(m => m.ExceptionBackendMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'exceptionprocedure', 
        loadComponent: () => import('./exceptionProcedure/hub/exceptionProcedure.hub').then(m => m.ExceptionProcedureHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ExceptionProcedure' }  
    },
    {
        path: 'exceptionprocedure/:id',
        loadComponent: () => import('./exceptionProcedure/master/exceptionProcedure.master').then(m => m.ExceptionProcedureMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'messagetype', 
        loadComponent: () => import('./messageType/hub/messageType.hub').then(m => m.MessageTypeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'MessageType' }  
    },
    {
        path: 'messagetype/:id',
        loadComponent: () => import('./messageType/master/messageType.master').then(m => m.MessageTypeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'recordlog', 
        loadComponent: () => import('./recordLog/hub/recordLog.hub').then(m => m.RecordLogHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'RecordLog' }  
    },
    {
        path: 'recordlog/:id',
        loadComponent: () => import('./recordLog/master/recordLog.master').then(m => m.RecordLogMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'resultmessage', 
        loadComponent: () => import('./resultMessage/hub/resultMessage.hub').then(m => m.ResultMessageHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ResultMessage' }  
    },
    {
        path: 'resultmessage/:id',
        loadComponent: () => import('./resultMessage/master/resultMessage.master').then(m => m.ResultMessageMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
];

//   ****    should be added into root.routes.ts
//  { path: 'Infra', loadChildren: () => import('./entities/infra/infra.routes').then(x => x.infra_routes) }