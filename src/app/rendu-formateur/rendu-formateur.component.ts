import { Component } from '@angular/core';
import {FormateurService} from "../core/services/formateur/formateur.service";
import {StudentService} from "../core/services/student/student.service";
import {RenduService} from "../core/services/rendu/rendu.service";

@Component({
  selector: 'app-rendu-formateur',
  templateUrl: './rendu-formateur.component.html',
  styleUrls: ['./rendu-formateur.component.css']
})
export class RenduFormateurComponent {

  students: any=[];
  rendus : any;
  user: any;
  promoId: any;
  constructor(private formateurService: FormateurService, private studentService: StudentService, private renduService: RenduService) { }
  ngOnInit(): void {
    this.getStudentByPromoId();
  }

  getStudentByPromoId() {
    this.formateurService.getFormateurPromoId().subscribe(
      (data: any) => {
        this.promoId = data;
        this.studentService.getStudentByPromoId(this.promoId).subscribe(
          (data: any) => {
            console.log(data);
            this.students = data;
          });
      });
  }

  getRendu(id: any) {
    this.renduService.getRenduByStudentId(id).subscribe(
      (data: any) => {
        //get id from url
        let examId = window.location.href.split("/")[4];
        this.rendus = data.filter((rendu: any) => rendu.exam_id == examId);
        this.rendus = data;
        console.log(this.rendus[0]);
        if (this.rendus[0] == undefined) {
          this.user = ""
        }else {
        this.user = this.students.filter((student: any) => student.id == this.rendus[0].student_id)[0];
        }
        console.log(this.rendus);
      });
  }

}
