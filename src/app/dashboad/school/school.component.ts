import {Component} from '@angular/core';
import {SchoolService} from "../../core/services/school/school.service";
import {LoginService} from "../../core/services/login/login.service";
import {SchoolAdminService} from "../../core/services/schoolAdmin/school-admin.service";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
  constructor(private schoolAdminService: SchoolAdminService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.getSchoolAdmins();
  }

  private oldSchoolAdmins: any;
  private password: any;
  update: boolean = false;
  schoolAdmins: any;
  schoolAdminData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    platform_admin_id: ""
  }
  searchFor: any;
  popupSchoolAdmin: boolean = false;

  private getSchoolAdmins() {
    this.schoolAdminService.getSchoolAdmins().subscribe(data => {
      console.log(data);
      this.schoolAdmins = data;
      this.oldSchoolAdmins = data;
    });
  }

  search() {
    // filter on schoolAdmins by firstName and lastName
    this.schoolAdmins = this.oldSchoolAdmins.filter((schoolAdmin: any) => {
      return schoolAdmin.firstName.toLowerCase().includes(this.searchFor.toLowerCase()) || schoolAdmin.lastName.toLowerCase().includes(this.searchFor.toLowerCase());
    });
  }

  addSchool() {
    this.schoolAdminService.addSchoolAdmin(this.schoolAdminData).subscribe(data => {
      console.log(data);
      this.getSchoolAdmins();
      this.closePopUp();
    });
  }

  deleteSchoolAdmin(id: any) {
    this.schoolAdminService.deleteSchoolAdmin(id).subscribe(data => {
      console.log(data);
      this.getSchoolAdmins();
    });
  }

  updateSchoolAdmin() {
    if (this.schoolAdminData.password === "") {
      this.schoolAdminData.password = this.password;
    }
    this.schoolAdminService.updateSchool(this.schoolAdminData).subscribe(data => {
      console.log(data);
      this.getSchoolAdmins();
      this.closePopUp();
      this.update = false;
      this.schoolAdminData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        platform_admin_id: ""
      }
    });
  }

  prepareUpdate(id: any) {
    let school = this.schoolAdmins.find((school: any) => {
      return school.id === id;
    });
    this.schoolAdminData = school;
    this.password = school.password;
    this.schoolAdminData.password = "";
    this.update = true;
    this.openPopUp();
    console.log(this.schoolAdminData);
  }

  closePopUp() {
    this.popupSchoolAdmin = false;
  }

  openPopUp() {
    this.popupSchoolAdmin = true;
  }

  logout() {
    this.loginService.logout();
  }
}
