import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {Constant} from '../../@lib/constant/constant';
import {BookingsPage} from '../bookings/bookings.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: Constant.ROUTES.MAIN_CHILD.BOOKINGS,
        component: BookingsPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}
