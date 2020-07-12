import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { DeudasComponent } from './deudas/deudas.component';


const pagesRoutes: Routes = [

    { path: 'inicio', component: InicioComponent },
    { path: 'registro', component: RegistroComponent},
    { path: 'deudas', component: DeudasComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);