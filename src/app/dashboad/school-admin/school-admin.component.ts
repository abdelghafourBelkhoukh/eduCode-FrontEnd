import {Component} from '@angular/core';
import {LoginService} from "../../core/services/login/login.service";
import {StudentService} from "../../core/services/student/student.service";
import {FormateurService} from "../../core/services/formateur/formateur.service";
import {PromoService} from "../../core/services/promo/promo.service";
import {SchoolService} from "../../core/services/school/school.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-school-admin',
  templateUrl: './school-admin.component.html',
  styleUrls: ['./school-admin.component.css']
})
export class SchoolAdminComponent {
  schoolId: any ;
  popupFormateur: boolean = false;
  popupStudent: boolean = false;
  popupPromo: boolean = false;

  updateFormateurStatus: boolean = false;
  updateStudentStatus: boolean = false;
  updatePromoStatus: boolean = false;

  searchForFormateur: string = '';
  searchForStudent: string = '';
  searchForPromo: string = '';

  formateurData: any = {
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
    school_id: "",
    promo_id: ""
  }
  studentData: any = {
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
    school_id: "",
    promo_id: ""
  }
  promoData: any = {
    name: "",
    year: "",
    school_id: ""
  }

  oldFormateur: any = [];
  oldStudent: any = [];
  oldPromo: any = [];
  schools: any = [];

  formateurs: any = [{
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
    school_id: ""
  }]
  students: any = [{
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
    school_id: ""
  }]
  promos: any = [{
    name: "",
    year: "",
    school_id: ""
  }]

  constructor(private loginService: LoginService,
              private studentService: StudentService,
              private formateurService: FormateurService,
              private promoService: PromoService,
              private schoolService: SchoolService,
              private router: Router
  ) {}

  ngOnInit() {
    this.getFormateurs();
    this.getStudents();
    this.getPromos();
    // this.getSchoolId();
  }

  // popups
  openFormateurPopUp() {
    this.popupFormateur = true;
  }

  closePopUpFormateur() {
    this.popupFormateur = false;
  }

  openStudentPopUp() {
    this.popupStudent = true;
  }
  closePopUpStudent() {
    this.popupStudent = false;
  }

  openPromoPopUp() {
    this.popupPromo = true;
  }
  closePopUpPromo() {
    this.popupPromo = false;
  }

  // logout
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  // search
  searchFormateur() {
    // filter on formateurs by firstName and lastName
    this.formateurs = this.oldFormateur.filter((formateur: any) => {
      return formateur.firstName.toLowerCase().includes(this.searchForFormateur.toLowerCase()) || formateur.lastName.toLowerCase().includes(this.searchForFormateur.toLowerCase());
    });
  }

  searchStudent() {
    // filter on students by firstName and lastName
    this.students = this.oldStudent.filter((student: any) => {
      return student.firstName.toLowerCase().includes(this.searchForStudent.toLowerCase()) || student.lastName.toLowerCase().includes(this.searchForStudent.toLowerCase());
    });
  }

  searchPromo() {
    // filter on promos by name and year
    this.promos = this.oldPromo.filter((promo: any) => {
      return promo.name.toLowerCase().includes(this.searchForPromo.toLowerCase()) || promo.year.toLowerCase().includes(this.searchForPromo.toLowerCase());
    });
  }


  // update
  prepareUpdateFormateur(id: any) {
    // get formateur by id
    this.formateurData = this.formateurs.find((formateur: any) => {
      return formateur.id === id;
    });
    this.updateFormateurStatus = true;
    this.popupFormateur = true;
  }

  prepareUpdateStudent(id: any) {
    this.studentData = this.students.find((student: any) => {
      return student.id === id;
    });
    this.updateStudentStatus = true;
    this.popupStudent = true;
  }

  prepareUpdatePromo(id: any) {
    this.promoData = this.promos.find((promo: any) => {
      return promo.id === id;
    });
    this.updatePromoStatus = true;
    this.popupPromo = true;
  }


  // delete
  deleteFormateur(id: any) {
    this.formateurService.deleteFormateur(id).subscribe(data => {
      console.log(data);
      this.getFormateurs();
    });
  }

  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.getStudents();
    });
  }

  deletePromo(id: any) {
    this.promoService.deletePromo(id).subscribe(data => {
      console.log(data);
      this.getPromos();
    });
  }

  // crud


  private getFormateurs() {
    this.formateurService.getFormateurs().subscribe(data => {
      console.log(data);
      this.oldFormateur = data;
      this.formateurs = data;
    });
  }

  private getStudents() {
    this.studentService.getStudents().subscribe(data => {
      console.log(data);
      this.oldStudent = data;
      this.students = data;
    });
  }

  private getPromos() {
    this.promoService.getPromos().subscribe(data => {
      console.log(data);
      this.oldPromo = data;
      this.promos = data;
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }


  addFormateur() {
    this.formateurService.addFormateur(this.formateurData).subscribe(data => {
      console.log(data);
      this.getFormateurs();
      this.popupFormateur = false;
    });
  }

  updateFormateur() {
    this.formateurService.updateFormateur(this.formateurData).subscribe(data => {
      console.log(data);
      this.getFormateurs();
      this.updateFormateurStatus = false;
      this.popupFormateur = false;
    });
  }

  addStudent() {
    this.studentService.addStudent(this.studentData).subscribe(data => {
      console.log(data);
      this.getStudents();
      this.popupStudent = false;
    });
  }

  updateStudent() {
    this.studentService.updateStudent(this.studentData).subscribe(data => {
      console.log(data);
      this.getStudents();
      this.updateStudentStatus = false;
      this.popupStudent = false;
    });
  }

  addPromo() {
    this.promoService.addPromo(this.promoData).subscribe(data => {
      console.log(data);
      this.getPromos();
      this.popupPromo = false;
    });
  }

  updatePromo() {
    this.promoService.updatePromo(this.promoData).subscribe(data => {
      console.log(data);
      this.getPromos();
      this.updatePromoStatus = false;
      this.popupPromo = false;
    });
  }

  private getSchoolId() {
    this.schoolService.getSchoolByAdminId().subscribe(data => {
      // console.log(data);
    });
  }
}
