import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { EntrarComponent } from './entrar/entrar.component';
import { LogginComponent } from './loggin/loggin.component';


@NgModule({
  declarations: [EntrarComponent, LogginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
