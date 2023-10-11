import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  

  WishListData:any;

  constructor(private _WishlistService:WishlistService , private _CartService:CartService ,private _ToastrService:ToastrService){}

 ngOnInit(): void {
  this.getLoggedUserWishlist()
 }
  getLoggedUserWishlist(){
    this._WishlistService.GetLoggedWishList().subscribe({
      next:(res:any)=>{

        console.log(res.data);
        this.WishListData=res.data
        
      }
    })
  }

  addToCartFromWish(id:string){
    this._CartService.addToCart(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this._CartService.cartNum.next(res.numOfCartItems)
        
      },

      complete:()=>{
      this._ToastrService.success("Product added to Cart Successfully");

       this.deleteItem(id)

        
      }
    })    
  }

  deleteItem(id:string){
    this._WishlistService.deleteFromWishList(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        localStorage.setItem('idWishList',res.data)
      },
      complete:()=>{
      this.getLoggedUserWishlist()

        console.log("deleted");
        
      }
    })
  }

}
