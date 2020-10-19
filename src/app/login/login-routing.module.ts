import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { LogginComponent } from './loggin/loggin.component';


const routes: Routes = [
  {
    path: '',
    component: EntrarComponent,
    children: [ {
      path: '',
      component: LogginComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
