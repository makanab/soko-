import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  

  constructor( private _q :NavbarComponent) { }

  ngOnInit() {


  }


  getSearchResult(){
    console.log(this._q.query)
    
  }

}
