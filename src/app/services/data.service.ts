import { Injectable } from '@angular/core';
import { retryWhen } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser="";
  currentacno="";

  constructor() { }
  userDetails: any = {
    1000: { acno: 1000, username: "shinas", password: 1000, balance: 1000,transaction:[] },
    1001: { acno: 1001, username: "shin", password: 1001, balance: 1000,transaction:[] },
    1002: { acno: 1002, username: "shins", password: 1002, balance: 1000 ,transaction:[]},
    1003: { acno: 1003, username: "shina", password: 1003, balance: 1000 ,transaction:[]},

  }

  register(acno: any, username: any, password: any) {
    let userDetails = this.userDetails

    if (acno in userDetails) {
      return false;
    }

    else {
      userDetails[acno] = {
        acno,
        username,
        password,
        balance: 0,
        transaction:[]

      }
      console.log(userDetails);
      return true;


    }
  }
  login(acno: any, pswd: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        this.currentUser=userDetails[acno]['username']
      this.currentacno=acno;
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false
    }
  }

  deposite(acno:any,pswd:any,amnt:any)  {
     var amount=parseInt(amnt)
    let userDetails=this.userDetails
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
       userDetails[acno]['balance']+=amount
       userDetails[acno]['transaction'].push({
        Type:'Credit' ,
        Amount:amount
       })
       console.log(userDetails);
       
       return userDetails[acno]['balance']
      }
      else{
        alert("password mismatch")
        return false

      }
      
    }
    else{
      alert("invalid data")
      return false}
  
  }
withdraw(acno:any,pswd:any,amnt:any){
  var amount=parseInt(amnt)
  let userDetails=this.userDetails;
  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      if(amount<userDetails[acno]['balance']){
      userDetails[acno]['balance']-=amount
      userDetails[acno]['transaction'].push({
        Type:'debit' ,
        Amount:amount
       })
      return userDetails[acno]['balance']
    }
    else{
      alert("insufficient fund")
    return false}
    }
    else{
      alert("password mismatch")
      return false}

    }
    else {
      alert("invalid data")
    }
  

}
gettransaction(acno:any){
  return this.userDetails[acno]['transaction']
}
}

  



