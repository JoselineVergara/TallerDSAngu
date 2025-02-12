import { Routes } from '@angular/router';
import { TablaInfoComponent } from './shared/tabla-info/tabla-info.component';
import { CartaComponent } from './shared/carta/carta.component';
import { TablaDetallesComponent } from './shared/tabla-detalles/tabla-detalles.component';

export const routes: Routes = [
    {path:'tabla',component:TablaInfoComponent},
    {path:'cartas',component:CartaComponent},
    {path:'detalles/:id', component:TablaDetallesComponent}
];
