import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
  },
  {
    path: 'starter',
    loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
  },
  {
    path: 'entrar',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
