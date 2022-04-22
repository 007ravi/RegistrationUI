import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  alluser=false;
  user=false;
  registerForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });
  constructor( private fb: FormBuilder,private userService:UserService) { }
  ngOnInit(): void {}
  
  
  get firstName(): any {
    return this.registerForm.get('firstName');
  }
  get lastName(): any {
    return this.registerForm.get('lastName');
  }
  get email(): any {
    return this.registerForm.get('email');
  }
  get userName(): any {
    return this.registerForm.get('userName');
  }
  registerFormSubmit(): void {
    const formData = this.registerForm.value;
   // delete formData.password1;
    console.log("check"+JSON.stringify(formData));
    // Api Request Here
    this.userService.createUser(formData).subscribe((data:any)=>{console.log(data)},(err:any)=> {})
  }

  finduser(){
    this.user=true;
    this.alluser=false;
  }

  findAllUser(){
this.alluser=true;
this.user=false;
  }
  

}
