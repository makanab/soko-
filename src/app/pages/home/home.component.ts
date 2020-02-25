import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  query:string;
  showSearchResults:boolean =false;
  showSiblings:boolean = true;


  constructor(private router:Router) { }

  ngOnInit() {
  
  }

  recieveQuery($event){
    this.query = $event
    console.log(this.query);
    if( this.query=='' ){
      this.router.navigateByUrl('/home');    


    } else{
      this.showSearchResults = true ;
      this.showSiblings = false;

      //this.router.navigateByUrl('/search');    

    }

  }








}
