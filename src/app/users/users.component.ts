import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/common.service';
declare var $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userForm: any;
  users: any;

  constructor(public fb: FormBuilder, private service: CommonService) {
    this.userForm = this.fb.group({
      Name: [''],
      Email: [''],
      Mobile: [''],
      Age: [''],
      id: [],
    });
  }

  ngOnInit(): void {
    this.GetAllUsers();
  }

  SubmitForm() {
    console.log(this.userForm.value);
    this.service.AddUpdateUser(this.userForm.value).subscribe((data) => {
      alert('Added');
      this.userForm.reset();
      this.GetAllUsers();
      console.log(data);
    });
  }

  GetAllUsers() {
    this.service.GetAllUsers().subscribe((data) => {
      console.log('users', data);
      this.users = data;
    });
  }

  DeleteUserById(ID: any) {
    debugger
    this.service.DeleteUserById(ID).subscribe((data) => {
      alert('User Deleted');
    });
    this.GetAllUsers();
  }
}
