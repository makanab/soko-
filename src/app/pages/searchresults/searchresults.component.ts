import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { Router } from '@angular/router';
import {SearchService} from '../../services/search.service';
import {Subject , throwError} from 'rxjs';
import {map ,debounceTime, distinctUntilChanged, switchMap,catchError} from 'rxjs/operators';



@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  result:any;
  keys:String[];
  @Output() searchEvent = new EventEmitter<any>();

  

  constructor(private router :Router,  private searchService:SearchService) { }



  ngOnInit() {

    //console.log(this.searchService.searchResults);
   //this.result  =  this.searchService.results 
   //console.log(this.result);
 
   //this.searchResults();


  }


  searchResults(){
    this.searchService.searchEntries('term').subscribe(
      res=>{
       // this.result = JSON.stringify(res);
       this.result = res;
      // this.keys = Object.keys(this.result);
        //console.log(this.keys);
      })
  }



 /* public search(){
    this.searchService.searchTerms.pipe(
      map((e:any)=>{
        console.log(e.target.value);
        return e.target.value;
      }),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term=>{
        this.loading = true;
        return this.searchService._searchEntries(term);
      }),
      catchError((e)=>{
        console.log(e)
        this.loading = false 
        this.errMessage = e.message;
        return throwError(e);

      }),
    ).subscribe( v=>{
      console.log(v);
      this.loading = true;
      this.searchResults = v;
      this.paginationelements = this.searchResults;
      

    })
  }


  shareSearch(){
    this.searchEvent.emit(this.search());
  }

  */






 









}
