import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';

import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

const routes : Routes = [
  {path: "", children: [
      {path: "",component: LoginComponent, pathMatch: "full"},
    ]}

]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
