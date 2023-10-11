import { Component } from '@angular/core';
import { FormGroup ,FormControl,Validators  } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMsg:string='';
  spinner:boolean=false;


constructor(private _AuthService:AuthService , private _Router:Router){
  
}

  loginForm= new FormGroup({
    email : new FormControl(null,[Validators.required ,Validators.email]),
    password : new FormControl(null,[Validators.pattern('[A-Z][A-Za-z0-9]{7,15}') ,Validators.required]),
  })
  sendDate(data:FormGroup){
    this.spinner=true
    console.log(data.value)
    this._AuthService.login(data.value).subscribe({
      next:(res:any)=>{
        console.log(res);
        if(res.message=="success"){
          localStorage.setItem('userToken',res.token);
          this._AuthService.decodeUserToken()
          this._Router.navigate(['/home'])
        }

      },
      error:(err:any)=>{
        this.spinner=false

        console.log(err.error.message);
        this.errorMsg=err.error.message
        
      },
      complete:()=>{
        this.spinner=false

        console.log("done");
      }
    })
  }

}
