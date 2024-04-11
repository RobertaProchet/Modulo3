import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthGuardService } from './auth-guard.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


export const DEFAULT_ROUTE = '/movie-list';

const routes: Routes = [
  {path: '', redirectTo: DEFAULT_ROUTE, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'movie-list', component: MovieListComponent, canActivate: [AuthGuardService]},
  {path: 'movie-details/:id', component: MovieDetailsComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
