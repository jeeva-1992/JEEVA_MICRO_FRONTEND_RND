import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = getAuthToken();

    if (token) {
      // Clone request and add Authorization header
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }

    
  return next(req);
};

function getAuthToken() {
  return localStorage.getItem('auth_token'); 
}

