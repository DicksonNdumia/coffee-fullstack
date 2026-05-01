import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Loading } from './Services/loading';
import { finalize } from 'rxjs';

export const myInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
const service = inject(Loading)

  service.show()
  return next(req).pipe(
    finalize(()=> service.hide())
  );
};
