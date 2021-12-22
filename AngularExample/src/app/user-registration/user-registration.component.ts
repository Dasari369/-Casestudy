import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './UserService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  
  user: User = new User();
  submitted=false;

  constructor(private userservice: UserService,private router:Router) { }

  ngOnInit() {
  }
  newUser():void{
    this.submitted = false;
    this.user = new User();
  }

  addUser(){
    this.userservice.createUser(this.user)
    .subscribe(response=>console.log(response),error=>console.log(error));
    this.user=new User();
    this.gotoList();
  }
  onSubmit(){
    this.submitted=true;
    this.addUser();
  }
  gotoList(){
    this.router.navigate(['/tasks'])
  }

}


