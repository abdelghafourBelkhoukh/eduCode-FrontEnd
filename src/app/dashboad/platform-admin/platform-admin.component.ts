import {Component} from '@angular/core';
import {SchoolService} from "../../core/services/school/school.service";

@Component({
  selector: 'app-platform-admin',
  templateUrl: './platform-admin.component.html',
  styleUrls: ['./platform-admin.component.css']
})
export class PlatformAdminComponent {

  constructor(private schoolService: SchoolService  ) {
  }

  ngOnInit(): void {
    this.getSchools();
  }

  private oldSchools: any;
  private password: any;
  update: boolean = false;
  schools: any;
  schoolData = {
    name: "",
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
  popupSchool: boolean = false;

  private getSchools() {
    this.schoolService.getSchools().subscribe(data => {
      console.log(data);
      this.schools = data;
      this.oldSchools = data;
    });
  }

  search() {
    // filter on schools by name
    this.schools = this.oldSchools.filter((school: any) => {
      return school.name.toLowerCase().includes(this.searchFor.toLowerCase());
    });
  }

  addSchool() {
    this.schoolService.addSchool(this.schoolData).subscribe(data => {
      console.log(data);
      this.getSchools();
      this.closePopUp();
    });
  }

  deleteSchool(id: any) {
    this.schoolService.deleteSchool(id).subscribe(data => {
      console.log(data);
      this.getSchools();
    });
  }

  updateSchool() {
    if (this.schoolData.password === "") {
      this.schoolData.password = this.password;
    }
    this.schoolService.updateSchool(this.schoolData).subscribe(data => {
      console.log(data);
      this.getSchools();
      this.closePopUp();
      this.update = false;
      this.schoolData = {
        name: "",
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
    let school = this.schools.find((school: any) => {
      return school.id === id;
    });
    this.schoolData = school;
    this.password = school.password;
    this.schoolData.password = "";
    this.update = true;
    this.openPopUp();
    console.log(this.schoolData);
  }

  closePopUp() {
    this.popupSchool = false;
  }

  openPopUp() {
    this.popupSchool = true;
  }
}
