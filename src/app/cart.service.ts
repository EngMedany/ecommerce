import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartNum= new BehaviorSubject(0);
  pathUrl:string='https://ecommerce.routemisr.com/api/v1'
  haederToken:any = {
    token : localStorage.getItem("userToken")
  }
  constructor(private _HttpClient:HttpClient ,private toastr: ToastrService) { 

    this.GetLoggedCart().subscribe({
      next:(res)=>{
        console.log(res);
        this.cartNum.next(res.numOfCartItems)
        
      }
    })
  }

  addToCart(id:string):Observable<any>{
    return this._HttpClient.post(`${this.pathUrl}/cart`,{productId:id},{headers:this.haederToken})
  }

  GetLoggedCart():Observable<any>{
    return this._HttpClient.get(`${this.pathUrl}/cart`,{headers:this.haederToken})
  }
  deleteOfMyCart(id:string):Observable<any>{
    return this._HttpClient.delete(`${this.pathUrl}/cart/${id}`,{headers:this.haederToken})
  }
  deleteALlOfMyCart():Observable<any>{
    return this._HttpClient.delete(`${this.pathUrl}/cart`,{headers:this.haederToken})
  }
 
  updateItem(id:string, count:number) :Observable<any>{
    return this._HttpClient.put(`${this.pathUrl}/cart/${id}`,{count:count},{headers:this.haederToken})
  }

  onlinePayment(CartId:string,data:FormGroup):Observable<any>{
    return  this._HttpClient.post(`${this.pathUrl}/orders/checkout-session/${CartId}?url=http://localhost:4200`
    ,{shippingAddress:data}
    ,{headers:this.haederToken})
  }




}
