import {environment} from '../../environments/environment';

export class Constant {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private static API = environment.endpoint;

  // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/member-ordering
  public static ENDPOINTS = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    USER: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      BY_EMAIL: Constant.API + `user/{email}`,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      BOOKINGS: Constant.API + `user/{email}/bookings?current={current}`
    }
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/naming-convention
  public static ROUTES = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    LOGIN: 'login',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    MAIN: 'main',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    MAIN_CHILD: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      BOOKINGS: 'bookings',
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    REDIRECT_TO: 'login',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    REDIRECT_TO_MAIN: 'main/bookings'
  };

}
