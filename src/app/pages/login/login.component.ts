import { Component, inject } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // userForm:FormGroup=new FormGroup({
  //   username:new FormControl(""),
  //   password:new FormControl("")
  // });
userName:FormControl=new FormControl("");
password:FormControl=new FormControl("");
router=inject(Router);
  onlogIn(){
    debugger;
     if(this.userName.value=='admin'&& this.password.value=='1234'){
  this.router.navigateByUrl('dashboard');
     }
     else{
      alert('wrong credentials');
     }
  }
}
