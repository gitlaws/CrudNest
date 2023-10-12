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
    var type = this.userForm.value.id == null ? 'Add' : 'Update';
    console.log(this.userForm.value);
    this.service.AddUpdateUser(this.userForm.value, type).subscribe((data) => {
      if (type == 'Add') {
        alert('Added');
      } else {
        alert('Updated');
      }

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
    debugger;
    this.service.DeleteUserById(ID).subscribe((data) => {
      alert('User Deleted');
    });
    this.GetAllUsers();
  }

  GetUserById(ID: any) {
    debugger;
    this.service.GetUserById(ID).subscribe((data) => {
      alert('get user successfully');
      console.log('user detail', data);
      $('#home').addClass('show');
      $('#home').addClass('active');
      $('#profile').removeClass('show');
      $('#profile').removeClass('active');
      this.userForm.patchValue({
        Name: data.Name,
        Email: data.Email,
        Mobile: data.Mobile,
        Age: data.Age,
      });
    });
  }
}
