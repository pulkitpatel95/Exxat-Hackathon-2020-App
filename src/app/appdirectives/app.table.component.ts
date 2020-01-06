import { HttpService } from "./../utilitymodule/services/app.http.service";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { tap, catchError, finalize } from "rxjs/operators";
import { BehaviorSubject, of, merge, Observable } from "rxjs";
import { Student } from "../models/app.student.model";
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDropList,
  CdkDragStart
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-table-component",
  templateUrl: "./app.table.component.view.html",
  styleUrls: ["./app.table.component.css"]
})
export class TableComponent implements OnInit, AfterViewInit {
  private dataSource: Array<any>;
  private studentSubject = new BehaviorSubject<Student[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public dataSourceMatTable;
  headers: Array<string>;
  headersCount: number;
  headerData: Array<string>;
  previousIndex: number;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Output()
  notify: EventEmitter<any>;
  constructor(private serv: HttpService) {
    this.dataSource = new Array<any>();
    this.headers = new Array<string>();
    this.headerData = new Array<string>();
    this.notify = new EventEmitter<any>();
    this.dataSourceMatTable = new MatTableDataSource();
  }

  // write setter and getter to accept the data for component
  @Input()
  set DataSource(v: Array<any>) {
    this.dataSource = v;
    if (this.dataSource.length > 0) {
      this.headersCount = v.length;
    }
  }
  get DataSource(): Array<any> {
    return this.dataSource;
  }

  // method to emit an event, obj is the payload
  onNotify(obj: any): void {
    this.notify.emit(obj);
  }
  ngOnInit(): void {
    this.getHeaderData();
    this.loadPages(1, "", "asc", 0, 5);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe();
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() =>
          this.loadPages(
            1,
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize
          )
        )
      )
      .subscribe();
  }

  loadPages(
    studentId: number,
    filter = "",
    sortDirection: string,
    pageIndex: number,
    pageSize: number
  ): void {
    this.loadingSubject.next(true);

    this.serv
      .getPaginatedData(studentId, filter, sortDirection, pageIndex, pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(resp => {
        this.dataSourceMatTable = resp;
      });
  }

  onHeaderClick(headerName: string) {
    this.serv.postHideData(headerName).subscribe(resp => resp);
    this.getHeaderData();
  }

  getHeaderData(): void {
    this.serv.getHeaderData().subscribe(resp => {
      this.headers = [];
      for (let i in resp) {
        if (resp[i] == true) {
          if (this.headers.indexOf(i) === -1) {
            this.headers.push(i);
          }
        } else {
          if (this.headerData.indexOf(i) === -1) {
            this.headerData.push(i);
          }
        }
      }
    });
  }

  onHiddenClicked(hData: string) {
    this.serv.postShowData(hData).subscribe(resp => resp);
    this.getHeaderData();
  }

  dragStarted(event: CdkDragStart, index: number) {
    this.previousIndex = index;
  }

  dropListDropped(event: CdkDropList, index: number) {
    if (event) {
      moveItemInArray(this.headers, this.previousIndex, index);
    }
  }

  update(el: Student, lName: string) {
    if (lName == null) {
      return;
    }
    const copy = this.dataSourceMatTable.data().slice();
    el.LastName = lName;
    this.dataSourceMatTable.update(copy);
  }
}
