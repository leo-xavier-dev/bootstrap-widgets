
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// My Componentes
import { HomeComponent } from './home/home.component';
import { EntidadeV1Component } from './entidade-v1/entidade-v1.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: '', redirectTo: '/entidade', pathMatch: 'full'
  },
  {
    path: 'entidade', component: EntidadeV1Component
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
