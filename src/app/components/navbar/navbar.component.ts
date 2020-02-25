import { Component,Output ,EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  query:string = 'hello world'
  showSearchResults= false;
  showSiblings= true;
  reset:boolean;

  

  @Output() queryEvent = new EventEmitter<string>();

  @Output() resetEvent = new EventEmitter<any>();

  constructor(private http :HttpClient, private router:Router,private _location :Location) { }
  

  onSearch(value){
    this.query = value;

    if(this.query ==''){
             

    }else{
      this.queryEvent.emit(this.query);
      

    }
    

  }




goHome():void{
  this.router.navigateByUrl('/home',{skipLocationChange:false}).then( ()=> {
    this.router.navigate([decodeURI(this._location.path())])
  });

}




  

}




