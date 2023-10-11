import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-datailes',
  templateUrl: './product-datailes.component.html',
  styleUrls: ['./product-datailes.component.scss']
})
export class ProductDatailesComponent implements OnInit {
  productId:string=''
  productData:any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:1000,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-alt-circle-left"></i>', ' <i class="fa-solid fa-arrow-alt-circle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
constructor(private _ProductService:ProductService ,private _ActivatedRoute:ActivatedRoute){

  console.log(_ActivatedRoute.snapshot.params['id']);
  this.productId =_ActivatedRoute.snapshot.params['id']
}

ngOnInit(): void {
    this.getproduct()
}

getproduct(){
  this._ProductService.getProductById(this.productId).subscribe({
    next:(res:any)=>{
      console.log(res.data);
      this.productData=res.data;
      

    }
  })
}
}
