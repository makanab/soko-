import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  query:string;

  constructor(private http :HttpClient, private router:Router) { }

  ngOnInit() {
  }


  onSearch(value){
    this.query = value;
    //console.log(this.query);
    if(this.query ==''){
       this.router.navigateByUrl('/home');
      

    }else{
      this.router.navigateByUrl('/search');

    }

    return this.query;
    

  }

}
