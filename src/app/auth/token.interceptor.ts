import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request has withCredentials set to true
    if (req.withCredentials) {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage (or another storage mechanism)

      if (token) {
        // Clone the request and add the Authorization header
        const clonedRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next.handle(clonedRequest);
      }
    }

    // If no withCredentials or no token, pass the request unmodified
    return next.handle(req);
  }
}
