import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {LoginService} from "./core/services/login/login.service";

export const isAuthorized: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router)

  if (!loginService.loggedIn) {
    return true; // user is logged in, allow access to the route
  }

  router.navigate(['/']);
  return false; // user is not logged in, prevent access to the route
}

export const isPlatformAdmin: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router)
  console.log("logged? :" + loginService.loggedIn)
  console.log("role :" + localStorage.getItem('role'))
  if (!loginService.loggedIn) {
    router.navigate(['/login']);
    return false; // user is not logged in, prevent access to the route
  }
  if (localStorage.getItem('role') !== 'PLATFORM_ADMIN') {
    router.navigate(['/']);
  }
  return true; // user is logged in, allow access to the route
}

export const isSchool: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router)
  console.log("logged? :" + loginService.loggedIn)
  console.log("role :" + localStorage.getItem('role'))
  if (!loginService.loggedIn) {
    router.navigate(['/login']);
    return false; // user is not logged in, prevent access to the route
  }
  if (localStorage.getItem('role') !== 'SCHOOL') {
    router.navigate(['/']);
  }

  return true; // user is logged in, allow access to the route
}

export const isSchoolAdmin: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router)
  console.log("logged? :" + loginService.loggedIn)
  console.log("role :" + localStorage.getItem('role'))
  if (!loginService.loggedIn) {
    router.navigate(['/login']);
    return false; // user is not logged in, prevent access to the route
  }
  if (localStorage.getItem('role') !== 'SCHOOL_ADMIN') {
    router.navigate(['/']);
  }
  return true; // user is logged in, allow access to the route
}

export const isFormateur: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router)
  console.log("logged? :" + loginService.loggedIn)
  console.log("role :" + localStorage.getItem('role'))
  if (!loginService.loggedIn) {
    router.navigate(['/login']);
    return false; // user is not logged in, prevent access to the route
  }
  if (localStorage.getItem('role') !== 'FORMATEUR') {
    router.navigate(['/']);
  }

  return true; // user is logged in, allow access to the route
}

export const isStudent: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router)
  console.log("logged? :" + loginService.loggedIn)
  console.log("role :" + localStorage.getItem('role'))
  if (!loginService.loggedIn) {
    router.navigate(['/login']);
    return false; // user is not logged in, prevent access to the route
  }
  if (localStorage.getItem('role') != 'STUDENT') {
    console.log("role :" + localStorage.getItem('role'))
    router.navigate(['/']);
  }

  return true; // user is logged in, allow access to the route
}


