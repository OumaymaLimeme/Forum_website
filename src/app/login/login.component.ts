import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ="";
  password: string ="";

  getData ?:boolean;
  constructor(private userservice:UserService,private router: Router) {}


  login() {
    var email=this.email;
    var password=this.password;
    this.userservice.getUserData(email,password).subscribe( (resultData: any) => {
      this.getData=resultData;
      if(this.getData==true){
            this.router.navigateByUrl('/dashboard');
       }
      else {
        alert("Invalide users");}

    });
  }
}
