import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {MedicalRecordsViewComponent} from "./medical-records/medical-records-view/medical-records-view.component";
import {AuthGuard} from "./auth/auth.guard";

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'records', component: MedicalRecordsViewComponent, canActivate: [AuthGuard] },
];
