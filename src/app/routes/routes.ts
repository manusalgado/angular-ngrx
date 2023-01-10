import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../features/list/list.module').then(m => m.ListModule),
    },
    {
        path: 'vehicles',
        loadChildren: () => import('../features/list-vehicles/list-vehicles.module').then(m => m.ListVehiclesModule),
    },
    {
        path: 'detail/:id',
        loadChildren: () => import('../features/detail/detail.module').then(m => m.DetailModule)
    },
    {
        path: 'register',
        loadChildren: () => import('../features/register/register.module').then(m => m.RegisterModule)
    }
];