import {Component, OnInit} from '@angular/core';
import {Bookings} from '../../@lib/model/bookings';
import {UsersService} from '../../@lib/services/users.service';

export interface Fields {
  id: number;
  name: string;
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loading = false;
  public fields: Fields[] = [
    {id: 1, name: 'BrookingId'},
    {id: 2, name: 'Cliente'},
    {id: 3, name: 'Fecha creacion'},
    {id: 4, name: 'Direccion'},
    {id: 5, name: 'Precio'}];
  data: Array<Bookings> = [];

  // search = '';

  constructor(private userSrv: UsersService) {
  }

  ngOnInit() {
    this.initBookings();
  }

  refresh(ev) {
    this.userSrv.bookings().then((res) => {
      this.data = res;
    }).finally(() => {
      ev.detail.complete();
    });
  }

  initBookings() {
    this.loading = true;
    this.userSrv.bookings().then((res) => {
      this.loading = false;
      this.data = res;
      // this.defaultTag();
    }).catch((err) => {
      console.log(err);
      this.loading = false;
    });
  }

  filter($event: any) {
    console.log($event);
    const search: any = ($event).toString();
    const regxNum = /(\d)$/;
    const regxPrice = /(\$?\d)$/;
    // const regxNumNot = /^(\d)$/;
    let filter;
    if (search.length > 0) {

      if (!regxNum.test(search)) {
        console.log('string');
        if (this.data?.filter((i) => (i.locationId.streetAddress).toUpperCase().toLowerCase()
          .includes(search.toUpperCase().toLowerCase())).length > 0) {
          filter = this.data.filter((i) => i.locationId.streetAddress.toUpperCase().toLowerCase()
            .includes(search.toUpperCase().toLowerCase()));
        } else if (this.data?.filter(i => i.tutenUserClient.firstName.toUpperCase().toLowerCase()
          .includes(search.toUpperCase().toLowerCase()) || i.tutenUserClient.lastName
          .toUpperCase().toLowerCase().includes(search.toUpperCase().toLowerCase())).length > 0) {
          filter = this.data.filter(i => i.tutenUserClient.firstName.toUpperCase().toLowerCase()
            .includes(search.toUpperCase().toLowerCase()) || i.tutenUserClient.lastName
            .toUpperCase().toLowerCase().includes(search.toUpperCase().toLowerCase()));
        }
        this.data = filter;
      } else {
        if (regxPrice.test(search)) {
          console.log('#_price');
          const split = search.split('$')[1];
          if (this.data?.filter((i) => (i.bookingPrice).toString().includes(split)).length > 0) {
            console.log('#price');
            filter = this.data?.filter((i) => (i.bookingPrice).toString().includes(split));
            console.log(filter);
          } else {
            console.log('#num');
            filter = this.data?.filter((i) => (i.bookingId).toString().includes(search));
            console.log(filter);
          }
          this.data = filter;
        }
      }

    } else {
      this.initBookings();
    }
  }
}
