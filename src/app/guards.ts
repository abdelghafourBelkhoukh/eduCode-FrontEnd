import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {LoginService} from "./core/services/login/login.service";

export const isAuthorized: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router)
  console.log("logged? :"+loginService.loggedIn)
  console.log("role :"+localStorage.getItem('role'))
  if(loginService.loggedIn){
    switch (localStorage.getItem('role')) {
      case 'PLATFORM_ADMIN':
        return router.parseUrl('/platform-admin');
      case 'SCHOOL':
        return router.parseUrl('/school');
      case 'SCHOOL_ADMIN':
        return router.parseUrl('/school-admin');
      case 'FORMATEUR':
        return router.parseUrl('/formateur');
      case 'STUDENT':
        return router.parseUrl('/');
    }
  }
  return true;
}
