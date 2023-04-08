import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {isAuthorized, isFormateur, isPlatformAdmin, isSchool, isSchoolAdmin, isStudent} from "./guards";
import {HomeComponent} from "./home/home.component";
import {ExamanComponent} from "./examan/examan.component";
import {ExamDetailsComponent} from "./exam-details/exam-details.component";
import {PlatformAdminComponent} from "./dashboad/platform-admin/platform-admin.component";
import {SchoolComponent} from "./dashboad/school/school.component";
import {SchoolAdminComponent} from "./dashboad/school-admin/school-admin.component";
import {RenduComponent} from "./rendu/rendu.component";
import {RenduFormateurComponent} from "./rendu-formateur/rendu-formateur.component";

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isAuthorized]
  },
  {
    path: '',
    component: HomeComponent,
    // canActivate: [!isAuthorized]
  },
  {
    path: 'formateur/exam',
    component: ExamanComponent,
    canActivate: [isFormateur]
  },
  {
    path: 'student/exam',
    component: ExamanComponent,
    canActivate: [isStudent]
  },
  {
    path: 'exam/:id',
    component: ExamDetailsComponent,
    canActivate: [isFormateur] || [isStudent]
  },
  {
    path: 'platform-admin',
    component: PlatformAdminComponent,
    canActivate: [isPlatformAdmin]
  },
  {
    path: 'school',
    component: SchoolComponent,
    canActivate: [isSchool]
  },
  {
    path: 'school-admin',
    component: SchoolAdminComponent,
    canActivate: [isSchoolAdmin]
  },
  {
    path: 'rendu',
    component: RenduComponent,
    canActivate: [isStudent]
  },
  {
    path: 'renduFormateur/:id',
    component: RenduFormateurComponent,
    canActivate: [isFormateur]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
