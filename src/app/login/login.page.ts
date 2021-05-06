import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Credentials} from '../../@lib/model/credentials';
import {Router} from '@angular/router';
import {UsersService} from '../../@lib/services/users.service';
import {Constant} from "../../@lib/constant/constant";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: Credentials = {
    email: '',
    password: ''
  };
  submitted = false;
  loading = false;
  errorMessage = '';

  constructor(private router: Router, private userSrv: UsersService) {
  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    this.loading = true;
    if (form.valid) {
      this.userSrv.login(this.login).then((res) => {
        console.log(res);
        this.loading = false;
        localStorage.setItem('token', res.sessionTokenBck);
        this.router.navigate([Constant.ROUTES.REDIRECT_TO_MAIN], {replaceUrl: true}).then(r => console.log(r));
        form.onReset();
      }).catch((err) => {
        console.log(err);
        this.errorMessage = 'Error de usuario y clave';
        this.loading = false;
      });
    }
  }

  onSignup() {

  }
}
