import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginInComponent } from './pages/login-in/login-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainPage2Component } from './pages/main-page2/main-page2.component';
import { MainPage3Component } from './pages/main-page3/main-page3.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginInComponent
    },
    {
        path: 'signUp',
        component: SignUpComponent
    },
    {
        path: 'dashboard',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginInComponent
    },
    {
        path: 'mainPage1',
        component: MainPageComponent
    },
    {
        path: 'mainPage2',
        component: MainPage2Component
    },
    {
        path: 'mainPage3',
        component: MainPage3Component
    }
];
