import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Product} from '../product'
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../wishlist.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from '../category.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList:Product[]=[];
  
  PhotoArr:any;
  word:string='';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    items:8,
    center:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:1000,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-alt-circle-left"></i>', ' <i class="fa-solid fa-arrow-alt-circle-right"></i>'],
    responsive: {
      0: {
       items:1
        
      },
      740: {
        items: 2
      },
     
    },
   
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:1000,
    navSpeed: 700,
    items:4,
        // responsive: {
    //   0: {
    //    items:1
        
    //   },
    //   740: {
    //     items: 2
    //   },
     
    // },
    
  }



constructor(private _ProductService:ProductService ,private _CartService:CartService ,private _ToastrService:ToastrService ,private _WishlistService:WishlistService , private _CategoryService:CategoryService){}
ngOnInit(): void {
  this.getProduct()
  this.GetPhoto()
}
getProduct(){
  this._ProductService.getAllProduct().subscribe({
    next:(res:any)=>{
      this.productList=res.data
      console.log(this.productList);

      
    }
  })
}

addToMyCart(id:string){
  this._CartService.addToCart(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this._CartService.cartNum.next(res.numOfCartItems)

    },
    error:()=>{

    },
    complete:()=>{
      this._ToastrService.success('Added to your cart!', 'success!');
    }


  })

}

addToMyWishList(id:string){
  this._WishlistService.AddToWhishList(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      // this._WishlistService.cartNum.next(res.numOfCartItems)

    },
    error:()=>{

    },
    complete:()=>{
      this._ToastrService.success('Added to your cart!', 'success!');
    }


  })

}

GetPhoto(){
  this._CategoryService.getAllCategory().subscribe({
    next:(res:any)=>{
      console.log(res.data);
      this.PhotoArr=res.data
      

    }
  })
}


}
