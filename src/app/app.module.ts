// CARGAMOS MODULOS DE ARNGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// importamos las rutas
import { routing, appRoutingProviders } from './app.routing';


// CARGAMOS COMPONENTES
import { AppComponent } from './app.component';
// importamos el nuevo componente creado
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { CompTest01Component } from './comp-test01/comp-test01.component';
import { CompTest02Component } from './comp-test02/comp-test02.component';
import { ExternoComponent } from './externo/externo.component';

// Cargando un pipe
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    // agregamos el nuevo Componente
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    CompTest01Component,
    CompTest02Component,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
