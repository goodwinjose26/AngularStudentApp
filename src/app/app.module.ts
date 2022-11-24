import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
    path:"",
    component:StudentEntryComponent
  },
  {
    path:"view",
    component:ViewstudentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    ViewstudentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
