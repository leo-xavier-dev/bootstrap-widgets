import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App Componentes
import { HomeComponent } from './home/home.component';
import { EntidadeV1Component } from './entidade-v1/entidade-v1.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';


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
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: '/projetos', pathMatch: 'full'
  },
  {
    path: 'projetos', component: ProjectComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
