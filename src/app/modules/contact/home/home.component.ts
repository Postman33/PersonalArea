import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public auth :AuthService) { }

  ngOnInit(): void {
    if (!this.auth.isAuth()){
      this.router.navigate(["/auth"])
    }
  }

}
