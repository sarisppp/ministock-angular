import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {


  //{one-way binding}
  // ตัวแปร
  message:string = "Hello Angular"
  //ตัวแปร object
  profile = {
      "name":"xxx",
      "tel":"xxx",
      "gender":"Male"
  }


  //{two-way binding}
  userData ={
    "email":"",
    "password":""
  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submitLogin(){
    // alert("Hey Angular");
    if(this.userData.email == "admin@gmail.com" && this.userData.password == '1234')
    {
      //alert("Login Success");
      this.router.navigate(['backend'])
    }
    else{
      alert("Login Fail!!!!");
    }

  }


}
