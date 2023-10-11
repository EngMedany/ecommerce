import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { WishlistService } from '../wishlist.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList:Product[]=[];
  arrOfWishlist:any=[]

  word:string='';
constructor(private _ProductService:ProductService ,private _CartService:CartService ,private _ToastrService:ToastrService,private _WishlistService:WishlistService){
  console.log(localStorage.getItem('idWishList')); 
  this.arrOfWishlist = localStorage.getItem('idWishList')?.split(',')
  console.log(this.arrOfWishlist);
  
}
ngOnInit(): void {
  this.getProduct()
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
addToMyWishList(id:string, event:any){
  console.log(event);
  
  this._WishlistService.AddToWhishList(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      localStorage.setItem('idWishList',res.data)
      if(event.target.classList.contains('bg-whitee')){
        event.target.classList.replace('bg-whitee','bg-red')
      }
      else{
        event.target.classList.replace('bg-red','bg-whitee')
      }

    },
    error:()=>{

    },
    complete:()=>{
      this._ToastrService.success('Added to your cart!', 'success!');
    }


  })

}


}
