import { Component } from '@angular/core';
import {StudentService} from "../core/services/student/student.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-examan',
  templateUrl: './examan.component.html',
  styleUrls: ['./examan.component.css']
})
export class ExamanComponent {

  exams: any;
  role: any = localStorage.getItem('role');
  popupExam: boolean = false;
  email: any ;
  currentDate = new Date();

  examData = {
    title:'',
    description:'',
    projectBackround:'',
    deadline:'',
    createdDate: formatDate(this.currentDate, 'yyyy-MM-dd', 'en'),
    promo_id:''
  }


  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
    this.getAllExams();
    this.getUserInfo();
  }

    getAllExams() {
      this.studentService.getExams().subscribe(data => {
        console.log(data);
        this.exams = data;
      });
    }

  openPopUp() {
    console.log("open popup");
    this.popupExam = true;
  }

  closePopUp() {
    console.log("close popup");
    this.popupExam = false;
  }

  createExam() {
    this.getUserByEmail(this.email);
    this.studentService.createExam(this.examData).subscribe(data => {
      console.log(data);
      this.popupExam = false;
      this.getAllExams();
    });
  }

  getUserInfo() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      this.email = JSON.parse(payload).username;
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getUserByEmail(email: string) {
    // @ts-ignore
    this.studentService.getUserByEmail(email).subscribe((data:any) => {
      console.log(data);
      this.examData.promo_id = data.promo_id;
    });
  }
}
