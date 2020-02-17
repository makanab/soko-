import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';
import { Product } from 'src/app/services/userServices/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  productData:Product ={
    description:'',
    category:''
  }

 showMessage:boolean;
 errMessage:string;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }


  selectedFile:File  = null;


  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);

  }


  onSubmit(){
    const fd = new FormData();
    fd.append('file',this.selectedFile,this.selectedFile.name);
    fd.append('description',this.productData.description);
    fd.append('category', this.productData.category);
   
    this.http.post(environment.apiBaseurl+'/upload',fd) 
    .subscribe(
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


