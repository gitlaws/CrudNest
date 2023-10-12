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

  DeleteUserByID(ID: any) {
    debugger;
    this.service.DeleteUserByID(ID).subscribe((data) => {
      alert('User Deleted');
    });
    this.GetAllUsers();
  }

  GetUserByID(ID: any) {
    debugger;
    this.service.GetUserByID(ID).subscribe((data) => {
      console.log('user detail', data);
      $('#home').addClass('show');
      $('#home').addClass('active');
      $('#profile').removeClass('show');
      $('#profile').removeClass('active');
      this.userForm.patchValue({
        Name: data.Name,
        id: data.id,
        Email: data.Email,
        Mobile: data.Mobile,
        Age: data.Age,
      });
    });
  }
}
