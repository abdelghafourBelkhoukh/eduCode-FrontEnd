import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {isAuthorized} from "./guards";
import {HomeComponent} from "./home/home.component";
import {ExamanComponent} from "./examan/examan.component";
import {ExamDetailsComponent} from "./exam-details/exam-details.component";

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isAuthorized]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'exam',
    component: ExamanComponent,
  },
  {
    path: 'exam/:id',
    component: ExamDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
