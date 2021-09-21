import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes : Routes = [
  {path: "", children: [
      {path: "",component: HomeComponent, pathMatch: "full"},
    ]}

]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactModule { }
