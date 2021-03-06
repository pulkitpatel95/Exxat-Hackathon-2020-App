import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './appdirectives/app.table.component';
import { StudentGridComponent } from './appdirectives/app.studentgrid.component';
import {MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatSelectModule, MatOptionModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { UtilityModule } from './utilitymodule/app.utility.module';
import { ContextMenu } from './contextmenu/app.contextmenu.component';

@NgModule({
  declarations: [
    AppComponent, TableComponent,StudentGridComponent, ContextMenu
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, UtilityModule,
    HttpClientModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule,
    MatTableModule, BrowserAnimationsModule, DragDropModule, SatPopoverModule, MatOptionModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [StudentGridComponent]
})
export class AppModule { }
