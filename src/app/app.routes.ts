import { Routes } from '@angular/router';
import { USUARIO_ROUTES } from './components/user/views/user.routes';
import { PublicComponent } from './components/user/views/public/public.component';

export const ROUTES: Routes = [
    {
        path: '',
        component:  PublicComponent,
        children: USUARIO_ROUTES
    },
    // { path: 'search', component: SearchComponent },
    { path: 'actividades', component: PublicComponent },
    { path: '', pathMatch: 'full', redirectTo: '' }, // Cualquier ruta vacia redirecciona al home
    { path: '**', pathMatch: 'full', redirectTo: '' } // Cualquier ruta ** redirecciona al home
];
