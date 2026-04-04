import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio';
import { EquiposComponent } from './components/equipos/equipos';
import { ResultadosComponent } from './components/resultados/resultados';
import { ClasificacionesComponent } from './components/clasificaciones/clasificaciones';
import { JugadoresComponent } from './components/jugadores/jugadores';
import { ArbitrosComponent } from './components/arbitros/arbitros';
import { ContactoComponent } from './components/contacto/contacto';
import { LoginComponent } from './components/login/login';
import { RolComponent } from './components/rol/rol';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'clasificaciones', component: ClasificacionesComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'arbitros', component: ArbitrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: InicioComponent },
  { path: 'administrador', component: InicioComponent }, 
  { path: 'capitan', component: InicioComponent },
  { path: 'arbitro', component: InicioComponent },
  { path: 'rol', component: RolComponent }
];

