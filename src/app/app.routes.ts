import { Routes } from '@angular/router';
import { LoginComponent } from './views/auth-forms/login/login';
import { IndexComponent } from './views/common-views/index-view';
import { RegisterUserComponent } from './views/auth-forms/register/register-user';
import { RegisterCompleted } from './views/auth-forms/register/completed/register-completed';
import { DefaltLayoutComponent } from './views/account/layout/defalt-layout';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'register', component: RegisterUserComponent },
  { path: 'register/completed', component: RegisterCompleted },
  // { path: 'layout', component: DefaltLayoutComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/auth-forms/login/login').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'layout',
    loadComponent: () => import('./views/account/layout/defalt-layout').then(m => m.DefaltLayoutComponent),
    //canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'account',
        loadChildren: () => import('./views/account/account.route').then(m => m.account_routes),
        data: { title: 'Account' },
      }
    ]
  },
  {
    path: '**', redirectTo: '/page404'
  }

]
