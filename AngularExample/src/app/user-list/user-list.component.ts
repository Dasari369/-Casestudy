import { Component, OnInit } from '@angular/core';
import { UserModel } from '../UserModel';
import { ServiceUser } from '../service-user.service';
import { Router } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users !: Observable<UserModel[]>;
  searchtext!:any;
 

  constructor(private userservice : ServiceUser, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userservice.getTaskUserList();
  }

  deleteUser(userID : number){
    this.userservice.deleteUser(userID)
    .subscribe(data=>{console.log(data);
                       this.reloadData();},
                       error=>console.log(error))
    
  }
 UserDetails( userID :number){
   this.router.navigate(['userdetails', userID ]);
 } 
 updateuser( userID :number){
   this.router.navigate(['updateuser', userID ]);
 }
}



