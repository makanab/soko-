import { Component,Output ,EventEmitter, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
  search:any;
 

  constructor(
    private http :HttpClient,
     private router:Router,
     private _location :Location,
     private searchService :SearchService
        
     ) { }

     ngOnInit(){
     this.searchService.search();
    

    
    }
    
    goHome():void{
  this.router.navigateByUrl('/home',{skipLocationChange:false}).then( ()=> {
    this.router.navigate([decodeURI(this._location.path())])
  });

}

onSearch(){
  this.router.navigateByUrl('/search');
}

getSearchEvent($event){

  this.search= $event;

}




 



  
}