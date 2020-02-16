import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

 showMessage:boolean;
 errMessage:string;

  constructor(private userServices:UserService) { }

  ngOnInit() {
  }


  onSubmit(form:NgForm){
    this.userServices.sellProduct(form.value).subscribe(
      res=>{
        this.showMessage = true;
        setTimeout(()=> this.showMessage =false , 4000)
        console.log(res);
      },
      err=>{
        this.showMessage = false;
        this.errMessage = err.error.message;
        console.log(err);
        
      }
    )
  
  }





}


