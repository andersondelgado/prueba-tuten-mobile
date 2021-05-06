import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginDisabledGuard} from "../@lib/guard/login-disabled.guard";
import {LoginEnabledGuard} from "../@lib/guard/login-enabled.guard";
import {Constant} from "../@lib/constant/constant";

const routes: Routes = [
  {
    path: Constant.ROUTES.MAIN,
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [LoginEnabledGuard]
  },
  {
    path: '',
    redirectTo: Constant.ROUTES.REDIRECT_TO,
    pathMatch: 'full'
  },
  {
    path: Constant.ROUTES.LOGIN,
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [LoginDisabledGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
