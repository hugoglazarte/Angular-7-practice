import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// importamos las rutas
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
// importamos el nuevo componente creado
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { CompTest01Component } from './comp-test01/comp-test01.component';
import { CompTest02Component } from './comp-test02/comp-test02.component';

@NgModule({
  declarations: [
    AppComponent,
    // agregamos el nuevo Componente
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    CompTest01Component,
    CompTest02Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
