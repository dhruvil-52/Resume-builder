import { Routes } from '@angular/router';

export const PagesRoutes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full',
    },
    {
        path: 'home', loadChildren: () => import("../pages/home/home.module").then(m => m.HomeModule)
    }
];
