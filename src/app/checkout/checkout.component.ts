import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute, withHashLocation } from '@angular/router';
// import { window } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
 
  
  cartId:string=''
  constructor(private _CartService:CartService,private _ActivatedRoute:ActivatedRoute){
     this.cartId =_ActivatedRoute.snapshot.params['cartId']
  }
  shippingForm=new FormGroup({
    Details:new FormControl(null),
    city:new FormControl(null),
    phone:new FormControl(null),
  })


  payment(data:FormGroup){
    this._CartService.onlinePayment(this.cartId,data.value).subscribe({
      next:(res)=>{
        console.log(res.session);
        // window.location.href=res.session.url
        
        
      },
      error:(res)=>{
        console.log(res)
      },
      complete:()=>{
        console.log("done");
        
      }
    })   
    }
}
