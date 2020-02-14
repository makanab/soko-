import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userServices/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usermodel = {
   email:'',
   password:''
  }

  errMessage:string;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {


  }

  onSubmit(form:NgForm){
    this.userService.loginUser(form.value).subscribe(
      res=>{

        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/home');

      },
      err=>{

        this.errMessage = err.error.message;
        console.log(this.errMessage)

      }

      )

  }

}
