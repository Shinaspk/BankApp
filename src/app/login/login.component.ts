import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //class-collections of properties ansd functions
  //properties/variables
  //functions/methods-user defined functions
aim="your perfect banking partner"
account="enter ur acc no:"
acno='';
pswd='';

//data base

userDetails:any={
  1000:{acno:1000,username:"shinas",password:1000,balance:1000},
  1001:{acno:1001,username:"shin",password:1001,balance:1000},
  1002:{acno:1002,username:"shins",password:1002,balance:1000},
  1003:{acno:1003,username:"shina",password:1003,balance:1000},

}
  //it aumatical invokes when tghe object is created
  //object initializataion
   acnochange(event:any){
    this.acno=event.target.value;
    console.log(this.acno);
    

   }

   pswdchange(event:any){

    this.pswd=event.target.value;
    console.log(this.acno);
    
   }
  login(){
    //alert("login clicked")
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if (acno in userDetails){
      if(pswd==userDetails[acno]['password']){
    
    alert("login successful")
    }
    else{
      alert("invalid password")
    }
  }
  else{
    alert("invalid user details")
  }
}
}

//its a life cycle  hooks of angular
//when the cpmponent is created at the same time it will ininitialize or authorized 


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   //class-collections of properties ansd functions
//   //properties/variables
//   //functions/methods-user defined functions
// aim="your perfect banking partner"
// account="enter ur acc no:"
// acno='';
// pswd='';

// //data base

// userDetails:any={
//   1000:{acno:1000,username:"shinas",password:1000,balance:1000},
//   1001:{acno:1001,username:"shin",password:1001,balance:1000},
//   1002:{acno:1002,username:"shins",password:1002,balance:1000},
//   1003:{acno:1003,username:"shina",password:1003,balance:1000},

// }
//   //it aumatical invokes when tghe object is created
//   //object initializataion
//    acnochange(event:any){
//     this.acno=event.target.value;
//     console.log(this.acno);
    

//    }

//    pswdchange(event:any){

//     this.pswd=event.target.value;
//     console.log(this.acno);
    
//    }
//   login(a:any,p:any){
//     //alert("login clicked")
//     var acno=a.value;
//     var pswd=p.value;
//     var userDetails=this.userDetails;

//     if (acno in userDetails){
//       if(pswd==userDetails[acno]['password']){
    
//     alert("login successful")
//     }
//     else{
//       alert("invalid password")
//     }
//   }
//   else{
//     alert("invalid user details")
//   }
// }


// //its a life cycle  hooks of angular
// //when the cpmponent is created at the same time it will ininitialize or authorized 
