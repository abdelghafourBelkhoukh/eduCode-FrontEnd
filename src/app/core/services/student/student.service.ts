import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  getExams() {
    return this.http.get('http://localhost:8080/api/examan', {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  getExamDetails(id: number) {
    return this.http.get('http://localhost:8080/api/examan/' + id, {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  createExam(examData: any) {
    return this.http.post('http://localhost:8080/api/examan', examData, {headers: {'Authorization': 'Bearer ' + this.token}});
  };

  // @ts-ignore
  getUserByEmail(email: string) {
    switch (localStorage.getItem('role')) {
      case 'STUDENT':
        return this.http.get('http://localhost:8080/api/student/' + email, {headers: {'Authorization': 'Bearer ' + this.token}});
      case 'FORMATEUR':
        return this.http.get('http://localhost:8080/api/formateur/byemail/' + email, {headers: {'Authorization': 'Bearer ' + this.token}});
      case 'SCHOOL_ADMIN':
        return this.http.get('http://localhost:8080/api/school-admin/' + email, {headers: {'Authorization': 'Bearer ' + this.token}});
    }
  }


  getStudents() {
    return this.http.get('http://localhost:8080/api/student', {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  addStudent(studentData: any) {
    return this.http.post('http://localhost:8080/api/student', studentData, {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  updateStudent(studentData: any) {
    return this.http.put('http://localhost:8080/api/student', studentData, {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  deleteStudent(id: any) {
    return this.http.delete('http://localhost:8080/api/student/' + id, {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  deleteExam(id: any) {
    return this.http.delete('http://localhost:8080/api/examan/' + id, {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  updateExam(examData: any) {
    console.log(examData);
    return this.http.put('http://localhost:8080/api/examan', examData, {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  getStudentByPromoId(promoId: any) {
    return this.http.get('http://localhost:8080/api/student/promo/' + promoId, {headers: {'Authorization': 'Bearer ' + this.token}});
  }
}
