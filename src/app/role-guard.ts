import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './Services/auth-service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRoles = route.data['roles'] as Array<number>;
  const userRole = parseInt(authService.getUserRole());

  if (expectedRoles.includes(userRole)) {
    return true;
  }

  return  router.navigateByUrl('/login')

};
