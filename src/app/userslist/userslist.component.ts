import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  users:any=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  getallusers()
  {
this.userService.getAllUsers().subscribe(
  (data:any)=>{
    this.users=data;
  console.log(this.users);
  },
  (error:any)=>{console.log(error)}
  );
  }

}
