import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Users {
  type: number
  username: string
  password: string
}

const USERS: Users[] = [
  {
    type: 1,
    username: "antonioaraujo",
    password: "hnq7etd1"
  },
  {
    type: 2,
    username: "user2@somosadd.com.br",
    password: "pass"
  }
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // Form fields.
  fieldsForm: FormGroup

  constructor(
    protected formBuilder: FormBuilder,
    private router: Router
  ) {

    this.fieldsForm = formBuilder.group({
      type: [null],
      username: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });

  }

  ngOnInit(): void {
  }

  signIn(): void {

    const _ul = this.fieldsForm.value

    if (USERS[0].username === _ul.username && USERS[0].password === _ul.password ) {
      this.router.navigate([''])
    }

  }

}
