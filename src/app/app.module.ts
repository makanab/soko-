import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule} from './material/material.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {CommonModule} from  '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';





import { CarouselComponent } from './components/carousel/carousel.component';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';
import { BunnerComponent } from './components/bunner/bunner.component';
import { ShelveComponent } from './components/shelve/shelve.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouteComponents}from './app-routing.module';




@NgModule({
  declarations: [


    AppComponent,
    NavbarComponent,
    CarouselComponent,
    NavFooterComponent,
    BunnerComponent,
    ShelveComponent,
    FooterComponent,
    DashboardComponent,    
    RouteComponents
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule
    

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
