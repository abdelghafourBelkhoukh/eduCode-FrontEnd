import { Component } from '@angular/core';
import {StudentService} from "../core/services/student/student.service";

@Component({
  selector: 'app-examan',
  templateUrl: './examan.component.html',
  styleUrls: ['./examan.component.css']
})
export class ExamanComponent {

  exams: any;
  role: any = localStorage.getItem('role');

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
    this.getAllExams();
  }

    getAllExams() {
      this.studentService.getExams().subscribe(data => {
        console.log(data);
        this.exams = data;
      });
    }

  showDetails(id:any) {
    console.log(id);
  }
}
