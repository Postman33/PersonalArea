import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';

import {RoutingModule} from './routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RoutingModule,
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
