import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { CustomersComponent } from './pages/customers/customers.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
      path:'',
      component:LayoutComponent,
      children:[
        {
            path:'dashboard',
            component:DashboardComponent
        },
        {
            path:'vehicle',
            component:VehiclesComponent
        },
        {
            path:'customer',
            component:CustomersComponent
        }
      ]
    }
];
