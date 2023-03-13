import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
// @ts-ignore
import {LoginService} from "../core/services/login/login.service";

export const isAuthorized: CanActivateFn = () => {
  const authService = inject(LoginService);
  const router = inject(Router)
  console.log("logged? :"+LoginService.loggedIn)
  if(LoginService.loggedIn) return router.parseUrl('/student')
  return true;
}
