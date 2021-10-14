import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  currentval="";
  currentval1="";
  currentval2="";
  onSubmit(data) {
    console.warn(data);
    this.currentval=data.email;
    this.currentval1=data.password;
    this.currentval2=data.address;
    
  }
 userData ={
   email:"aswathiramanan14@gmail.com",
   password:"1234",
   address:"pallippuram"
 }
}

