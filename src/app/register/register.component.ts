import { Component  } from '@angular/core';
import { FormGroup ,FormControl,Validators  } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMsg:string='';
  spinner:boolean=false;


constructor(private _AuthService:AuthService){}

  registerForm= new FormGroup({
    name : new FormControl(null,[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]),
    email : new FormControl(null,[Validators.required ,Validators.email]),
    password : new FormControl(null,[Validators.pattern('[A-Z][A-Za-z0-9]{7,15}') ,Validators.required]),
    rePassword : new FormControl(null,[Validators.pattern('[A-Z][A-Za-z0-9]{7,15}'),Validators.required]),
    phone : new FormControl(null,Validators.pattern('01[1025][0-9]{8}')),
  },{validators:this.passwordMatching})

passwordMatching(registerForm:any){

  let pass=registerForm.get('password')
  let rePass=registerForm.get('rePassword')

  if(pass.value === rePass.value){
    return null;
  }
  else{
    rePass.setErrors({match: 'password and rePassword notMatched '})
    return {match: 'password and rePassword notMatched '}
  }
}



  sendDate(data:FormGroup){
    this.spinner=true
    console.log(data.value)
    this._AuthService.register(data.value).subscribe({
      next:(res:any)=>{
        console.log(res);
        
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
