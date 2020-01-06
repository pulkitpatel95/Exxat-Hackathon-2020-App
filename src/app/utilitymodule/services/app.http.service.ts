import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "./../../models/app.student.model";
@Injectable()
export class HttpService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:30285/Student";
  }

  getData(): Observable<Student[]> {
    let resp: Observable<Student[]> = null;
    resp = this.http.get<Student[]>(this.url);
    return resp;
  }

  getHeaderData(): Observable<any> {
    let resp: Observable<string> = null;
    resp = this.http.get<string>(`${this.url}/GetHeadersData`);
    return resp;
  }

  postHideData(headerName: string): Observable<string> {
    let resp: Observable<string> = null;
    resp = this.http.get<string>(`${this.url}/PostHideData?headerName=${headerName}`);
    return resp;
  }

  postShowData(headerName: string): Observable<string> {
    let resp: Observable<string> = null;
    resp = this.http.get<string>(`${this.url}/PostShowData?headerName=${headerName}`);
    return resp;
  }

  getPaginatedData(
    studentId: number,
    filter: string,
    sortDirection,
    pageIndex: number,
    pageSize: number
  ): Observable<Student[]> {
    let resp: Observable<Student[]> = null;
    return (resp = this.http.get<Student[]>(
      `${this.url}/GetPaginatedData?studentId=${studentId}
        &filter=${filter}&sort=${sortDirection}&pageIndex=${pageIndex}&pageSize=${pageSize}`
    ));
  }

  postData(u: Student): Observable<Student> {
    let resp: Observable<Student> = null;
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resp = this.http.post<Student>(this.url, u, options);
    return resp;
  }

  putData(u: Student): Observable<Student> {
    let resp: Observable<Student> = null;
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resp = this.http.put<Student>(`${this.url}/${u.StudentId}`, u, options);
    return resp;
  }

  deleteData(u: Student): Observable<boolean> {
    let resp: Observable<boolean> = null;
    resp = this.http.delete<boolean>(`${this.url}/${u.StudentId}`);
    return resp;
  }
}
