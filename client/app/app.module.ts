import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent }  from './home.component';
import { EmployeesComponent }  from './employees.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing],
  declarations: [AppComponent, HomeComponent , EmployeesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }