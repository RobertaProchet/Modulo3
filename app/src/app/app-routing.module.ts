import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthGuardService } from './auth-guard.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { IndexComponent } from './index/index.component'; // Importar o IndexComponent
import { AdminComponent } from './admin/admin.component'; // Importar o AdminComponent
import { MovieEditComponent } from './movie-edit/movie-edit.component'; // Importe o MovieEditComponent aqui


export const DEFAULT_ROUTE = '/movie-list';

const routes: Routes = [
  { path: '', component: IndexComponent }, // Roteamento para o IndexComponent
  { path: 'login', component: LoginComponent },
  { path: 'movie-list', component: MovieListComponent, canActivate: [AuthGuardService] },
  { path: 'movie-details/:id', component: MovieDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] }, // Rota para a área de administração
  { path: 'movie-edit', component: MovieEditComponent, canActivate: [AuthGuardService] }, // Adicione a rota para o MovieEditComponent
  { path: 'error', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
