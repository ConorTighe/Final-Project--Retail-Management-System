import { NgModule, ApplicationRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MapsComponent } from './map.component';
import { AppComponent } from './app.component';
import { HomeComponent }  from './home.component';
import { EmployeesComponent }  from './employees.component';
import { routing } from './app.routing';
import { DetailsComponent } from './details.component';
import { SupportComponent } from './support.component';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule],
  declarations: [AppComponent, HomeComponent , EmployeesComponent, DetailsComponent, MapsComponent, SupportComponent],
  exports: [ DetailsComponent, SupportComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
