import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {StudentService} from "../core/services/student/student.service";

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css']
})
export class ExamDetailsComponent {
  private routeSub: Subscription | undefined;
  examDetails: any;
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.getExamDetails(params['id']);
    });
  }

  getExamDetails(id: number) {
    this.studentService.getExamDetails(id).subscribe(data => {
      console.log(data);
      this.examDetails = data;
    });
  }


}
