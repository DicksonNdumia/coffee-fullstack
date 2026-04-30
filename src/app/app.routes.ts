import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { AdminDashboard } from './pages/admin/admin-dashboard/admin-dashboard';
import { authGuard } from './auth-guard';
import { roleGuard } from './role-guard';
import { DirectorDashboard } from './pages/directors/director-dashboard/director-dashboard';
import { UserDashboard } from './pages/users/user-dashboard/user-dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',

  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard]
      }
    ]
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboard,
    canActivate: [roleGuard],
    data: {roles: [1]}

  },

  {
    path: 'directors',
    component: DirectorDashboard,
    canActivate: [roleGuard],
    data: {roles: [2]}
  },

  {
    path: 'user',
    component: UserDashboard,
    canActivate: [roleGuard],
    data: {roles: [3]}
  }


];
