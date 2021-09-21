import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './shared/error/error.component';


const routes : Routes = [
  {path: "", loadChildren: ()=>import("./modules/contact/contact.module").then( m => m.ContactModule)},
  {path: "auth",loadChildren: ()=>import("./modules/auth/auth.module").then( m => m.AuthModule)},
  {path:"not-found", component: ErrorComponent},
  {path:"**", redirectTo: "not-found"},
]
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})], // Конфигурируем роуты, а также
  // загружаем все модули с ленивой загрузкой
  exports: [RouterModule] // Экспортируем данные роуты в другие части приложения

})
export class RoutingModule { }
