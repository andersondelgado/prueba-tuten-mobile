import {Component} from '@angular/core';
import {Constant} from '../../@lib/constant/constant';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public appPages = [
    {id: 1, title: 'Bookings', url: '/' + Constant.ROUTES.REDIRECT_TO_MAIN, icon: 'list'},
    {id: 2, title: 'Salir', url: '', icon: 'exit'}
  ];

  constructor(private router: Router) {
  }

  exit(p: any) {
    if (p.id === 2) {
      localStorage.clear();
      this.router.navigateByUrl(Constant.ROUTES.REDIRECT_TO).then((r) => console.log(r));
    }
  }
}
