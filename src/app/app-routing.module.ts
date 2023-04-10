import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoDetalleComponent } from './componentes/vehiculo-detalle/vehiculo-detalle.component';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';
import { HomeComponent } from './paginas/home/home.component';
import { ClienteComponent } from './paginas/cliente/cliente/cliente.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'vehiculos',
    component: VehiculoComponent
  },
  {
    path: 'vehiculos/:codigo',
    component: VehiculoDetalleComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
