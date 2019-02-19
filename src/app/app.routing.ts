// Importamos modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos componentes
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent }  from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
// componentes de prueba
import { CompTest01Component } from './comp-test01/comp-test01.component';

// Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'videojuego', component: VideojuegoComponent },
  // pasando parametros en las rutas
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'cursos/:nombre/:apellidos', component: CursosComponent },
  // fin parametros por ruta
  { path: 'comptest1', component: CompTest01Component },
  { path: '**', component: HomeComponent }
];

// Exportamos el modulo del routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
