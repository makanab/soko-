import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { Router } from '@angular/router';
import {SearchService} from '../../services/search.service';


@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  results:any;

  

  constructor(private router :Router,  private searchService:SearchService) { }

  ngOnInit() {
    this.searchResulst();



  }

  searchResulst(){
 this.results = this.searchService.searchResults;
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
