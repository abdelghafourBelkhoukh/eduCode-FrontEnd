import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {isAuthorized} from "./guards";
import {HomeComponent} from "./home/home.component";
import {ExamanComponent} from "./examan/examan.component";
import {ExamDetailsComponent} from "./exam-details/exam-details.component";
import {PlatformAdminComponent} from "./dashboad/platform-admin/platform-admin.component";
import {SchoolComponent} from "./dashboad/school/school.component";
import {SchoolAdminComponent} from "./dashboad/school-admin/school-admin.component";

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
  },
  {
    path: 'platform-admin',
    component: PlatformAdminComponent,
  },
  {
    path: 'school',
    component: SchoolComponent,
  },
  {
    path: 'school-admin',
    component: SchoolAdminComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
