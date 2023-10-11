import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') !== null) {
      console.log("done");
      
      this.decodeUserToken();
    }
    console.log("hi");
    
  }

  decodeUserToken() {
    let encoded: string = JSON.stringify(localStorage.getItem('userToken'));
    let decoded: any = jwtDecode(encoded);
    console.log(decoded);
    this.userData.next(decoded);
    console.log(this.userData.getValue());
  }
  register(data: FormGroup): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      data
    );
  }
  login(data: FormGroup): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      data
    );
  }
  logOut() {
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
    this.userData.next(null)
  }
}
