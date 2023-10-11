import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  pathUrl:string='https://ecommerce.routemisr.com/api/v1'
  haederToken:any = {
    token : localStorage.getItem("userToken")
  }

  constructor(private _HttpClient:HttpClient) { }

  AddToWhishList(id:string):Observable<any>{
    return this._HttpClient.post(`${this.pathUrl}/wishlist`,{productId:id},{headers:this.haederToken})
  }

  GetLoggedWishList():Observable<any>{
    return this._HttpClient.get(`${this.pathUrl}/wishlist`,{headers:this.haederToken})
  }

  deleteFromWishList(id:string):Observable<any>{
    return this._HttpClient.delete(`${this.pathUrl}/wishlist/${id}`,{headers:this.haederToken})
  }

}
