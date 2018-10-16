import { Routes, RouterModule } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';


export const USUARIO_ROUTES: Routes = [
    { path: '', component: ActividadesComponent },
    { path: '', pathMatch: 'full', redirectTo: '' },
    { path: '**', pathMatch: 'full', redirectTo: ''}
];
