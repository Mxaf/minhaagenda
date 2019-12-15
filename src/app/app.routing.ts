import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'agenda', component: AddComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);