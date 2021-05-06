import {Injectable} from '@angular/core';
import {HttpService} from '../common/http.service';
import {Credentials} from '../model/credentials';
import {Constant} from '../constant/constant';
import {environment} from '../../environments/environment';
import {HttpHeaders} from '@angular/common/http';
import {Bookings} from '../model/bookings';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpService) {
  }

  login(input: Credentials): Promise<any> {
    const oldUrl = Constant.ENDPOINTS.USER.BY_EMAIL.replace('{email}', input.email);
    const url = oldUrl;
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        password: input.password
      })
    };
    return this.http.put(url, {}, httpOptions).toPromise();
  }

  bookings(current = true): Promise<Array<Bookings>> {
    const oldUrl = Constant.ENDPOINTS.USER.BOOKINGS.replace('{email}', environment.contact).replace('{current}', String(current));
    const url = oldUrl;
    return this.http.get(url).toPromise();
  }
}
