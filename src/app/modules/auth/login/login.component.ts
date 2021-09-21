import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/auth.service';
import {User} from '../../../interfaces/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public sending = false;
  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
   this.form =  new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(4), Validators.required]),
    });
  }

  OnSubmit() {
  let u : User = {
    login: this.form.value.email,
    password: this.form.value.password,
  }
  this.auth.login(u).subscribe( res => {
    console.log(res);
    if (res) {
      this.router.navigate(["/"])
    }
  })
  }
}
