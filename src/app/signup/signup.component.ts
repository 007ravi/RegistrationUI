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
  userData={};
  searchText:any;
  registerForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });
  constructor( private fb: FormBuilder,private userService:UserService) { }
  ngOnInit(): void {}
  
  
  get firstname(): any {
    return this.registerForm.get('firstname');
  }
  get lastname(): any {
    return this.registerForm.get('lastname');
  }

  get password(): any {
    return this.registerForm.get('password');
  }
  get email(): any {
    return this.registerForm.get('email');
  }
  get username(): any {
    return this.registerForm.get('username');
  }
  registerFormSubmit(): void {
    const formData = this.registerForm.value;
   // delete formData.password1;
    console.log("check"+JSON.stringify(formData));
    // Api Request Here
    this.userService.createUser(formData).subscribe(
      (data:any)=> {console.log(data)},
      (err:any)=> {console.log(err)}
      );
  }

  getUser()
  {
    console.log(this.searchText);
 //   this.userService.findUserByName();
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
