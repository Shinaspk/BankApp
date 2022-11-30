import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  uname="";
  pswd="";
  acno="";

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router){}
  registerForm = this.fb.group({
  acno:[''],
  uname:[''],
  pswd:[''],
})
  
  register(){
    console.log(this.registerForm);
    
   // alert("registered succesfully")
   var uname=this.registerForm.value.uname
   var pswd=this.registerForm.value.pswd
   var acno=this.registerForm.value.acno

   const result=this.ds.register(acno,uname,pswd);

   if(result){
    alert("registered succesfully")
    this.router.navigateByUrl('')
   }
   else{
    alert("user already exist")
    this.router.navigateByUrl('register')
   }

   

  }

}
