import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { RegisterPage } from './register/register.page';
import { LoginPage } from './login/login.page';
import { Tab2Page } from './tab2/tab2.page';
import { ComptePage } from './compte/compte.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'register',
    component: RegisterPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'accueil',
    component: Tab2Page
  },
  {
    path: 'compte',
    component: ComptePage
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
