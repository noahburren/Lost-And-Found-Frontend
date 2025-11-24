import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemCreateComponent } from './pages/item-create/item-create.component';
import {UsersComponent} from './pages/users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'items/new', component: ItemCreateComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: 'items' }
];
