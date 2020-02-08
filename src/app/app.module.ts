import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule} from './material/material.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';
import { BunnerComponent } from './components/bunner/bunner.component';
import { ShelveComponent } from './components/shelve/shelve.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';


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
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
