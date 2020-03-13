import { Injectable } from '@angular/core';
import {Observable,of,empty} from 'rxjs';
//import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Subject , throwError} from 'rxjs';
import {map ,debounceTime, distinctUntilChanged, switchMap,catchError} from 'rxjs/operators';
//import {SearchService} from '../../services/search.service';



@Injectable({
  providedIn: 'root'
})
export class SearchService {


 
  public searchTerms = new Subject<string>();
  public loading:boolean;
  public  searchResults:any[];
  public paginationelements:any;
  public errMessage:any; 
  results:any;
  keys:string[];



  constructor(private http :HttpClient) { }

  public searchUrl = 'http://localhost:3000/api/search'

 // public searchResults:any;

  // make http cals to the api 
  public searchEntries(term):Observable<any>{
    
    if(term ===''){
      console.log('Not defined');
    } else{
      let params = {q:term}
      return this.http.get(this.searchUrl,{params})
      /*.pipe(
        map(response=>{
         // console.log(response)
          this.results = response;
          return this.searchResults = response['items'];
         
        })
      );*/
    }
    

  }


  // return results 


  public _searchEntries(term ){
    return  this.searchEntries(term);
  }




  




   // search form 

   public searchForm = new FormGroup({
    search: new FormControl('',Validators.required)
  });




  // search event 

  
  public search(){
    this.searchTerms.pipe(
      map((e:any)=>{
        console.log(e.target.value);
        return e.target.value;
      }),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term=>{
        this.loading = true;
        return this._searchEntries(term);
      }),
      catchError((e)=>{
        console.log(e)
        this.loading = false 
        this.errMessage = e.message;
        return throwError(e);

      }),
    ).subscribe( v=>{
      this.loading = true;
      this.searchResults = [v];
      //this.keys = Object.keys(this.searchResults);
     // console.log(v);
     // this.keys = Object.keys(this.searchEntries);
      //console.log(this.searchResults[0]['data']);
      console.log([v])
      this.paginationelements = this.searchResults;
      

    })
  }









}
