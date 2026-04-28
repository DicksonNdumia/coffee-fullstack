import { HttpInterceptorFn } from '@angular/common/http';

export const custonInterceptor: HttpInterceptorFn = (req, next) => {
  const localToken = localStorage.getItem('accessToken');
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localToken}`,
    },
  });
  return next(req);
};
