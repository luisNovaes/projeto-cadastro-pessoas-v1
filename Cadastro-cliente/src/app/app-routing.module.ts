import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { DetailsCadastroComponent } from './details-cadastro/details-cadastro.component';
import { CreateCadastroComponent } from './create-cadastro/create-cadastro.component';
import { ListCadastroComponent } from './list-cadastro/list-cadastro.component';
import { UpdateCadastroComponent } from './update-cadastro/update-cadastro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastros', component: ListCadastroComponent },
  { path: 'add', component: CreateCadastroComponent },
  { path: 'update/:id', component: UpdateCadastroComponent },
  { path: 'details/:id', component: DetailsCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
