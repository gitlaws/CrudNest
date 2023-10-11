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

  ngOnInit(): void {}

  SubmitForm() {
    console.log(this.userForm.value);
  }
}
