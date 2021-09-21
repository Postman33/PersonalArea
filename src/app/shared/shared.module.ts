import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import { ErrorHintDirective } from './error-hint.directive';
import { ErrorComponent } from './error/error.component';


const MaterialList = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [
    ErrorHintDirective,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ...MaterialList,
    RouterModule
  ],
  exports: [
    ...MaterialList,
    RouterModule

  ]
})
export class SharedModule { }
