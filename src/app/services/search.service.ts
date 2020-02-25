import { Injectable } from '@angular/core';
import {Observable,of,empty} from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http :HttpClient) { }

  public searchUrl = 'http:localhost:3000/search'

  public searchResults:any;

  // make http cals to the api 
  public searchEntries(term):Observable<any>{
    
    if(term === ''){
      console.log('Not defined');
    } else{
      let params = {q:term}
      return this.http.get(this.searchUrl,{params}).pipe(
        map(response=>{
          console.log(response)
          return this.searchResults = response['items'];
        })
      );
    }
    

  }


  // return results 


  public _searchEntries(term ){
    return  this.searchEntries(term);
  }



}
