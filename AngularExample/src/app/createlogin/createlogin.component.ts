import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from './loginService';
import { User } from './User';

@Component({
  selector: 'app-createlogin',
  templateUrl: './createlogin.component.html',
  styleUrls: ['./createlogin.component.css']
})
export class CreateloginComponent implements OnInit {

  user: User = new User();
  userName !: string;
  password !:string;
  
constructor(private loginservice:loginService,private router:Router) { }

  ngOnInit(): void {
    
  }

  check(value:any)
  {
    this.userName = value.userName;
    this.password = value.password;
   this.loginservice.validate(this.userName,this.password).subscribe(data=>{
    console.log(data);  
    if(data==true)
    {
     
      this.gotopage();
    }
    if(data==false)
    {
      alert("Please enter Valid Credentials");
    }
    
  },error=>console.log(error));

}

gotopage(){
  this.router.navigate(["/tasks"]);
}



  
    
    
 
}
