import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 checking:boolean=false
  cartData:any;
 constructor(private _CartService:CartService , private _ToastrService:ToastrService){}

 ngOnInit(): void {
     this.getMyCart()
 }
 getMyCart(){
  this._CartService.GetLoggedCart().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.cartData=res.data
      this.checking=true
      

    }
  })
 }


deleteItemOfMyCart(id:string){
  this._CartService.deleteOfMyCart(id).subscribe({
    next:(res:any)=>{
console.log(res);

    },
    error:()=>{

    },
    complete:()=>{
     this.getMyCart()

      this._ToastrService.success("Product Deleted Successfully");
    }
  })
} 
deleteAllItemOfMyCart(){
  this._CartService.deleteALlOfMyCart().subscribe({
    next:(res:any)=>{
    console.log(res);
      this.cartData=[]
      this._CartService.cartNum.next(0)
      this.checking=false

    },
    error:()=>{

    },
    complete:()=>{
      this._ToastrService.success("Product Deleted Successfully");
    }
  })
} 



updateMyCart(id:string , count:number){
  this._CartService.updateItem(id,count).subscribe({
    next:(res:any)=>{
      console.log(res);
      
    },

    complete:()=>{
     this.getMyCart()
      this._ToastrService.success("Product updated Successfully");

    }
  })

}
}
