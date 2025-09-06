import { Routes } from "@angular/router";
import { AuthGuard } from "../../core/security/auth.gaurd";


export const account_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../account/pet-owner/dashboard/user-dashboard').then(m => m.UserDashboardComponent),
    data: {
      title: 'User Dashboard'
    }
  },

  {
    path: 'user-dashboard',
    loadComponent: () => import('../account/pet-owner/dashboard/user-dashboard').then(m => m.UserDashboardComponent),
    data: {
      title: 'User Dashboard'
    }
  }, {
    path: 'pet-owner',
    loadComponent: () => import('../account/pet-owner/dashboard/user-dashboard').then(m => m.UserDashboardComponent),
    data: {
      title: 'Pet Owner Dashboard'
    }
  },
  {
    path: 'page404',
    loadComponent: () => import('../pages/page404/page404').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'page500',
    loadComponent: () => import('../pages/page500/page500').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '**', redirectTo: 'page404'
  }
];

// if (AuthGuard.UserType.id === 4) { // 4 : PetOwners
//   account_routes.push();
// }