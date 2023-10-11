import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }

  getAllBrands():Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  getSpecificBrands(id:string):Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }
  getAllCategory():Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  getAllSubCategory(id:string):Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
  }
}
