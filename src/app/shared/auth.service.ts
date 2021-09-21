import {Injectable, OnInit} from '@angular/core';
import {compareUsers, User} from '../interfaces/User';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit{

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  // Данные для входа в учетную запись
  public RegistrationData = {
    _id: 1, login: "admin@mail.ru", password: "admin"
  }


  public login(user : User){
    if (compareUsers(user,this.RegistrationData )){
      localStorage.setItem("user_auth",user.login)
      localStorage.setItem("user_role",user.role)
      localStorage.setItem("user_expires",String(new Date(Date.now() + 60*60*24*9)))
      return of({status: true})
    }
    return of({status:false})
  }

  public logout(){
    localStorage.removeItem("user_auth")
    localStorage.removeItem("user_role")
    localStorage.removeItem("user_expires");

    this.router.navigate(["/auth"]);
  }

  public isAuth() : boolean{
    return !!localStorage.getItem("user_expires")
  }
}
