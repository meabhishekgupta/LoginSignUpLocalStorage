import { Routes } from '@angular/router';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'LoginSignUp',
        pathMatch: 'full' 
    },
    {
        path: 'LoginSignUp',
        component: LoginSignUpComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path:'Dashboard',
                component: DashboardComponent
            }
        ]
    }

];
