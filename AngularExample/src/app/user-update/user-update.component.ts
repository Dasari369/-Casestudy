import { Component, OnInit } from '@angular/core';
import { UserModel } from '../UserModel';
import { ServiceUser } from '../service-user.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

 userID !:number;
  user !:UserModel;

  constructor(private route:ActivatedRoute,
    private router:Router, private userservice : ServiceUser ) { }

  ngOnInit() {
    this.user = new UserModel();
    this.userID= this.route.snapshot.params['userID'];
    this.userservice.getUser(this.userID)
    .subscribe(data=>{
      console.log(data);
      this.user=data;
    },error=>console.log(error))
  }
  updateTasks(){
    this.userservice.updateUser(this.userID , this.user)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.user = new UserModel();
    this.gotoList();
  }

  onSubmit(){
    this.updateTasks();
  }
  gotoList(){
    this.router.navigate(['/users'])

}
}
