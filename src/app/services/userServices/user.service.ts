import { Injectable } from '@angular/core';
import {User}from '../userServices/user';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userData:User ={
    fullname:'',
    email:'',
    password:''
  }


  constructor(private http:HttpClient) { }



  // http methods 

registerUser(user:User){
  return this.http.post(environment.apiBaseurl+'/register',user);
}

loginUser(authCredentials){
  return this.http.post(environment.apiBaseurl+'/auth',authCredentials);
}
getUserPtofile(){
  return this.http.get(environment.apiBaseurl+'/profile');
}




  //helper methods 



  setToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
    localStorage.getItem('token');
  }


  deleteToken(){
    localStorage.removeItem('token');
  }

  getPayload(){
    const token = localStorage.getItem('token');
    if(token){
      const userPayload = atob(token.split('.')[1])
      return JSON.parse(userPayload);
    } else{
      return null;
    }
  }


  isLoggedIn(){
    const userPayload = this.getPayload();
    if(userPayload){
      return userPayload.exp > Date.now() /1000
    }
  }

 



}
