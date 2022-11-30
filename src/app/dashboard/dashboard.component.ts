import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //deposite
  acno="";
  pswd="";
  amount="";
  //withdraw
  acno1="";
  pswd1="";
  amount1="";


  user="";

  constructor(private ds:DataService){
    this.user=this.ds.currentUser

  }
  deposite(){
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount
    //alert("amount deposited")

    const result=this.ds.deposite(acno,pswd,amount)

    if (result){
      alert(`${amount} is credited ...availble balance=${result}`)
    }
  }
  withdraw(){
    //alert("amount withdrawed")
    var acno1=this.acno1;
    var pswd1=this.pswd1;
    var amount1=this.amount1

    const result=this.ds.withdraw(acno1,pswd1,amount1)

    if(result){
      alert(`${amount1}is debited ...avalible balance is ${result}`)
    }
  }


  

}
