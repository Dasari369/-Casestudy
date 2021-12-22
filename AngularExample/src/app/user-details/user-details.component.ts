import { Component, OnInit } from '@angular/core';
import { UserModel } from '../UserModel';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiceUser } from '../service-user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    userID  !:number;
     user !: UserModel;
  
    constructor(private route:ActivatedRoute,
      private router:Router, private userservice : ServiceUser) { }
  
     ngOnInit() {
       this.user=new UserModel();
       this.userID  = this.route.snapshot.params['userID'];
       this.userservice.getUser(this.userID)
       .subscribe(data=>{
         console.log(data);
         this.user=data;      
       },error=>console.log(error));
     }
   
     list(){
      this.router.navigate(['/users'])
     } 
   }
   

