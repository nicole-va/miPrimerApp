import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';
import { CalificacionComponent } from './componentes/calificacion/calificacion/calificacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PaginacionTablaComponent } from './componentes/paginacion-tabla/paginacion-tabla.component';
import { VehiculoDetalleComponent } from './componentes/vehiculo-detalle/vehiculo-detalle.component';
import { HomeComponent } from './paginas/home/home.component';
import { UserInterceptor } from './interceptores/user-interceptor';
import { ClienteComponent } from './paginas/cliente/cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    CalificacionComponent,
    PaginacionTablaComponent,
    VehiculoDetalleComponent,
    HomeComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    FontAwesomeModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
