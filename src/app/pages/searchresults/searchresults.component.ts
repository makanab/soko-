import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  query:string;
  

  constructor(private router :Router) { }

  ngOnInit() {


  }


/* 
  recieveQuery($event){
    this.query = $event
    console.log(this.query);
    if( this.query=='' ){
      this.router.navigateByUrl('/home');    


    }

  } */



}
