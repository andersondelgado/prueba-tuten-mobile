import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    let headers: any;

    headers = {
      "adminemail": environment.adminEmail,
      "app": environment.app
    }

    let token = localStorage.getItem('token');
    if (token) {
      headers['token'] = token;
    }

    const reqHeaders = req.clone({setHeaders: headers});
    return next.handle(reqHeaders);
  }
}
