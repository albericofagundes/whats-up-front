import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './shared/blank/blank.component';
import { LoginComponent } from './shared/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
