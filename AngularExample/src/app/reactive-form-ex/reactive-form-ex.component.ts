import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-ex',
  templateUrl: './reactive-form-ex.component.html',
  styleUrls: ['./reactive-form-ex.component.css']
})
export class ReactiveFormExComponent implements OnInit {

  form: any;
  name !:string;
  language !:string;

  ngOnInit(){
    this.form = new FormGroup({
      firstname: new FormControl("",
          Validators.compose([Validators.required,Validators.minLength(3)])
      ),
      lastname: new FormControl(""),
      languages:new FormControl("")
    });
  }

  onSubmit(user:any){
    console.log(user);
    this.name = user.firstname;
    this.language=user.languages;
  }

}
