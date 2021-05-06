import {Subject} from 'rxjs';

export class Util {

  static setSearch(args: any) {
    // eslint-disable-next-line no-underscore-dangle
    this._searchObservable$.next(args);
  }

  static getSearch() {
    // eslint-disable-next-line no-underscore-dangle
    return this._searchObservable$;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  private static _searchObservable$ = new Subject();
}
