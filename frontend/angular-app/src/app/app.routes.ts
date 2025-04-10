import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';

export const routes = [
  { path: '', component: UserLoginComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'user-list', component: UserListComponent }
];
