import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-sign-up',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './login-sign-up.component.html',
  styleUrl: './login-sign-up.component.css'
})
export class LoginSignUpComponent {
  registerObj:Register=new Register();
  loginObj:Login=new Login();
  toggleVar : 'Login' | 'SignUp' ='SignUp';
  testVar : any;

  toggleVarFunc(togVar : 'Login' | 'SignUp'){
    this.toggleVar = togVar;
  }
  constructor(private _router: Router){
  }
  onLogin(){
    // debugger;
    const localUsers=localStorage.getItem('users');
    if(localUsers!=null){
      const users=JSON.parse(localUsers);      
      const isUserExist = users.Find((users: Register)=>users.emailAddress== this.loginObj.emailAddress && users.password == this.loginObj.password);
      debugger;
      if(isUserExist!= undefined){
        alert('User Login Successful');
        this._router.navigateByUrl('/Dashboard')
      }else{
        alert('Email or Password is incorrect');
        this.toggleVar='SignUp'
      }     
    }else{
      debugger
      alert('User Not Registered');
      this.toggleVar='SignUp'
    }
  }

  onRegister(){
    this.testVar = this.registerObj;
    const localUsers=localStorage.getItem('users');
    if(localUsers!=null){
      const users=JSON.parse(localUsers);
      users.push(this.registerObj);
      localStorage.setItem('users',JSON.stringify(users));
      alert('User Registered Successfully')
    }else{
      const users=[];
      users.push(this.registerObj);
      localStorage.setItem('users',JSON.stringify(users));
      alert('User Registered Successfully')
    }
  }
}
export class Register{
  fullName : string;
  emailAddress : string;
  password : string;
  
  constructor(){
    this.fullName="";
    this.emailAddress="";
    this.password="";
  }
}
export class Login{
  emailAddress : string;
  password : string;
  
  constructor(){
    this.emailAddress="";
    this.password="";
  }
}
