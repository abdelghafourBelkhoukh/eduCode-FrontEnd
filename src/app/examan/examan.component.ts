import { Component } from '@angular/core';
import {StudentService} from "../core/services/student/student.service";
import {RenduService} from "../core/services/rendu/rendu.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-examan',
  templateUrl: './examan.component.html',
  styleUrls: ['./examan.component.css']
})
export class ExamanComponent {

  exams: any;
  examsOld: any;
  updateStatus: boolean = false;
  role: any = localStorage.getItem('role');
  popupExam: boolean = false;
  popupRendu: boolean = false;
  isOpen: boolean[] = [];
  email: any ;
  currentDate = new Date();

  examData = {
    id: '',
    title:'',
    description:'',
    projectBackround:'',
    deadline:'',
    createdDate: formatDate(this.currentDate, 'yyyy-MM-dd', 'en'),
    promo_id:''
  }
  renduData: any = {
    id: '',
    link:'',
    message:'',
    exam_id:'',
    student_id:''
  }



  constructor(private studentService : StudentService, private renduService : RenduService){}

  ngOnInit(): void {
    this.getAllExams();
    this.getUserInfo();
  }

    getAllExams() {
      this.studentService.getExams().subscribe(data => {
        console.log(data);
        this.exams = data;
        this.examsOld = data;
        this.isOpen = new Array(this.exams.length).fill(false);
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
      this.exams.push(data);
      this.popupExam = false;
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


  myFunction(i: number) {
    console.log(i,this.isOpen[i]);
    this.isOpen[i] = !this.isOpen[i];
  }

  preperToUpdate(id: any, i: number) {
   let exam = this.examsOld.filter((item: any) => item.id === id);
    this.examData = exam[0];
    this.isOpen[i] = false;
   this.updateStatus = true;
   this.popupExam = true;

  }

  delete(id: any,i: number) {
    this.studentService.deleteExam(id).subscribe(data => {
      this.isOpen[i] = false;
      console.log(data);
      this.exams = this.exams.filter((item: any) => item.id !== id);
    });
  }

  UpdateExam() {
    this.studentService.updateExam(this.examData).subscribe(data => {
      console.log(data);
      this.exams = this.examsOld;
      this.updateStatus = false;
      this.popupExam = false;
    });
  }

  openPopUpRendu(id: any) {
    console.log("open popup");
    this.renduData.exam_id = id;
    this.popupRendu = true;
  }

  closePopUpRendu() {
    console.log("close popup");
    this.popupRendu = false;
  }
  createRendu() {
    this.renduService.getStudentIdByEmail().subscribe((data:any) => {
      console.log(data);
      this.renduData.student_id = data;
    });
    console.log(this.renduData)
    this.renduService.createRendu(this.renduData).subscribe(data => {
      console.log(data);
      this.popupRendu = false;
    });
  }
}
