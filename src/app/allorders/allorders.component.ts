import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {
constructor(private _OrderService:OrderService){}

ngOnInit(): void {
    this.getAllOrders()
}
getAllOrders(){
  this._OrderService.getAllOrder().subscribe({
    next:(res:any)=>{
      console.log(res);
    }
  })
}
}
