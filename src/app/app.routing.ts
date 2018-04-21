import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
	{ path: '', component: DemoHomeComponent, canActivate: [AuthGuard] },
	
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);
