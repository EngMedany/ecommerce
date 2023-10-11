import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brandList:any;
  BrandName:any

  constructor(private _CategoryService:CategoryService){}
  ngOnInit(): void {
    this.getBrands()
    
  }

  getBrands(){
    this._CategoryService.getAllBrands().subscribe({
      next:(res:any)=>{
        console.log(res.data);
        this.brandList=res.data
      }
    })
  }

  getSpecificBrand(id:string){
    this._CategoryService.getSpecificBrands(id).subscribe({
      next:(res:any)=>{
        console.log(res.data);
        this.BrandName=res.data

      }
    })
  }
}
