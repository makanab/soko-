import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.css']
})
export class ShelveComponent implements OnInit {

  items = ["1","2","3","4","5","6","7","8","9","10","12"]

  currentRate =8

  itemData:any =[]

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getitemData();
    console.log(this.getitemData())



  }


  getitemData(){
    return this.http.get<any>(environment.apiBaseurl+'/items').subscribe(
      res=>{
        const b64Res = btoa(res);
        this.itemData = 'data:image/jpeg;base64' + b64Res;
        console.log(res);
      },
      err=>console.log(err)
    );
    
  }








}
