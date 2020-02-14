import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userServices/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showMessage:boolean;
  errMessage:string;
  
  constructor(private userService:UserService , private router:Router) { }

  ngOnInit() {

  }

  onSubmit(form:NgForm){
    this.userService.registerUser(form.value).subscribe(
      res =>{
        this.showMessage = true;
        this.router.navigateByUrl('/signin');
        setTimeout(()=> this.showMessage=false,4000);


      },
      err=>{
        this.showMessage= false;
        
        if(err.status ===501){
          this.errMessage = err.error.join('<br/>')
        }else{
          this.errMessage ='server errror please contact the admin'
        }


      }
    )
  




  }

}
