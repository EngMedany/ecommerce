import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetService } from '../forget.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {


  constructor(private _ForgetService:ForgetService , private _Router:Router){
    
  }
  step1:boolean=true
  step2:boolean=false
  step3:boolean=false
  email:string=''
  userMsg:string='';


  forgetPassForm:FormGroup = new FormGroup({
    email :new  FormControl('',[Validators?.required])
  })

  resetCodeForm:FormGroup = new FormGroup({
    resetCode :new  FormControl('',[Validators?.required])
  })
  resetPasswordForm:FormGroup = new FormGroup({ 
    newPassword:new FormControl( '',[Validators?.required])
  })


  forgetPassword(){
    let userEmail = this.forgetPassForm.value
    this.email=userEmail.email
    this._ForgetService.forgetPass(userEmail).subscribe(
      {
      next:(res:any)=>{
        console.log(res);
        console.log(this.email);
        this.userMsg=res.message
        
      },  
      error:(res:any)=>{
        this.userMsg=res.error.message
      },

      complete:()=>{
        this.step1=false
        this.step2=true
      } 

      
    })

  }
  ResetCode(){
 let resetCode= this.resetCodeForm.value
    this._ForgetService.resetCode(resetCode).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.userMsg=res.status
        this.step2=false
        this.step3=true
        
      },
      error:(res:any)=>{
        this.userMsg= res.error.message
      }
    })
  }
  ResetPassword(){
    let resetForm = this.resetPasswordForm.value
    resetForm.email= this.email
    this._ForgetService.resetPass(resetForm).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.userMsg= res.message
        if(res.token){
          localStorage.setItem('newUserToken',res.token)
        }

      },
      error:(res:any)=>{
        this.userMsg=res.error.message
      },
      complete:()=>{
        this._Router.navigate(['/login'])
      }


    })

  }
}
