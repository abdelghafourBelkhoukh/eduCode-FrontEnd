import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from "./app.routing.module";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {ExamanComponent} from "./examan/examan.component";
import {ExamDetailsComponent} from "./exam-details/exam-details.component";
import {PlatformAdminComponent} from "./dashboad/platform-admin/platform-admin.component";
import {SchoolComponent} from "./dashboad/school/school.component";
import {SchoolAdminComponent} from "./dashboad/school-admin/school-admin.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ExamanComponent,
    ExamDetailsComponent,
    PlatformAdminComponent,
    SchoolComponent,
    SchoolAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
