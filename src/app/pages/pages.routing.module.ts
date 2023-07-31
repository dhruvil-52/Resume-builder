import { Routes } from '@angular/router';

export const PagesRoutes: Routes = [
    {
        path: '', redirectTo: 'my-resume', pathMatch: 'full',
    },
    {
        path: 'my-resume', loadChildren: () => import("../pages/home/home.module").then(m => m.HomeModule)
    }
];
