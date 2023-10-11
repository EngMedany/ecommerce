import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  nameOfSub:string=''
  categoryArr:any
  categoryList:any;

  constructor(private _CategoryService:CategoryService){}

  ngOnInit(): void {
  this.getCategory()
}
  getCategory(){
    this._CategoryService.getAllCategory().subscribe({
      next:(res:any)=>{
        console.log(res.data);
        this.categoryList=res.data
        

      }
    })
  }

  getSubProduct(id:string , nameOfSub:string){
    this._CategoryService.getAllSubCategory(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.categoryArr=res.data
        this.nameOfSub=nameOfSub
        
      }
    })
  }
}
