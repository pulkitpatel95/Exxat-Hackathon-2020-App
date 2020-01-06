import { HttpService } from "./../utilitymodule/services/app.http.service";
import { Component, OnInit } from "@angular/core";
import { Student } from "../models/app.student.model";

@Component({
  selector: "app-studentgrid-component",
  templateUrl: "./app.studentgrid.view.html"
})
export class StudentGridComponent implements OnInit {
  student: Student;
  students: Array<Student>;
  data: string;
  constructor(private service: HttpService) {
    this.students = new Array<Student>();
    this.student = new Student(0, "", "", "", "", 0, "", "", "", "", "");
  }

  ngOnInit(): void {
    this.service.getData().subscribe(resp => {
      this.students = resp;
    });
  }

  subscribeToData($event) {
    this.data = `Received data from Child as ${JSON.stringify($event)}`;
  }
}
