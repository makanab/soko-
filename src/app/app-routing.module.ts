import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SellComponent } from './pages/sell/sell.component';


const routes: Routes = [ 

  {
    path:'', 
    redirectTo:'/home',
     pathMatch:'full'
  },
  {
  path:'home', 
  component:HomeComponent


  },
  {
    path:'signup', 
    component:RegisterComponent
  
  
    },
    {
      path:'signin', 
      component:LoginComponent
    
    
      },
      {
        path:'sell', 
        component:SellComponent
      
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RouteComponents = [HomeComponent,LoginComponent,RegisterComponent , SellComponent];
