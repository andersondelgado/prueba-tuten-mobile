import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, reqOpts?: any): Observable<any> {
    return this.http.get(endpoint, reqOpts).pipe(map(this.extractData), catchError(this.handleError));
  }

  post(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.post(endpoint, body, reqOpts).pipe(map(this.extractData), catchError(this.handleError));
  }

  put(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.put(endpoint, body, reqOpts).pipe(map(this.extractData), catchError(this.handleError));
  }

  delete(endpoint: string, reqOpts?: any): Observable<any> {
    return this.http.delete(endpoint, reqOpts).pipe(map(this.extractData), catchError(this.handleError));
  }

  patch(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.patch(endpoint, body, reqOpts).pipe(map(this.extractData), catchError(this.handleError));
  }


  protected extractData(parameters: any): Observable<any> {
    // console.log("success: "+JSON.stringify(parameters));
    let res: any;
    // eslint-disable-next-line prefer-const
    res = (parameters);
    let body: any;
    // eslint-disable-next-line prefer-const
    body = res;
    // console.log('body ' + body);
    return body || {};
  }

  protected handleError(parameters: any): Observable<any> {
    // console.log((parameters));
    return (parameters || {});
  }
}
