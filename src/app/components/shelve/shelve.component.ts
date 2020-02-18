import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.css']
})
export class ShelveComponent implements OnInit {
  
  
  currentRate =8

  itemData:any =[];
  /*
   productImage;
   productRef:any=[];
   productRefname:string;

   */


   /*
   @Desc use map function fr http get in furure updates insted of static url
   */


  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getitemData();

  }


  /*
  // product image refrence

  getproductimage(){
    return this.http.get<any>(environment.apiBaseurl+'/files').subscribe(
      res=>{

        this.productRef =res;
        this.productRefname = this.productRef.filaname;
        console.log(this.productRefname)


      },
      err=>console.log(err)
    )
  }
  */


// product data 
  getitemData(){
    return this.http.get<any>(environment.apiBaseurl+'/product').subscribe(
      res=>{
        this.itemData = res;
        console.log(this.itemData);

        }            
        
        
      ,
      err=>console.log(err)
    )
    
  }








}
