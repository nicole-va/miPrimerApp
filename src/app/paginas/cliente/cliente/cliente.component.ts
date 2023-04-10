import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/interface/cliente';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  constructor (private clienteService: ClientesService,
    private formBuilder: FormBuilder) {}

  formularioCliente: FormGroup;

  filtrarPor:string = "";
  listaCliente:any[] = [];

  contactar:boolean = false;

  rows:number = 5;
  pages:number;
  page: number = 1;

  ngOnInit(): void {
    this.formularioCliente = this.formBuilder.group({
        "nombre": [null],
        "apellido": [null],
        "telefono": [null],
        "email": [null]
      });
    }

    _contactar(){
      console.log(this.contactar);
      this.contactar = !this.contactar;
      console.log(this.contactar);
    }

    consultaCliente(){
      this.clienteService.getCliente(this.filtrarPor, this.rows, this.page).subscribe((respuesta)=>{
        if(respuesta.codigo == 1){
          this.listaCliente = respuesta.data;
          this.rows = respuesta.rows;
          this.pages = respuesta.pages;
        }
      });
    }

    guardarCliente(){
      let cliente:Cliente = {...this.formularioCliente.value};
      
      if (this.contactar && (!cliente.telefono || !cliente.email)) {
        alert("Por favor llene ambos campos para contactarlo");
      }else{
      this.clienteService.agregarCliente(cliente).subscribe((respuesta)=>{
        alert(respuesta.mensaje);
        console.log(cliente)
        if(respuesta.nombre == 1){
          console.log(respuesta.codigo)
        }
      },
        (errorHttp:HttpErrorResponse) => {
          let mensaje = errorHttp.error.mensaje;
          mensaje += errorHttp.error.error?.nombre ? (' - ' + errorHttp.error.error?.nombre) : "";
          mensaje += errorHttp.error.error?.apellido ? (' - ' + errorHttp.error.error?.apellido) : "";
          mensaje += errorHttp.error.error?.telefono ? (' - ' + errorHttp.error.error?.telefono) : "";
          mensaje += errorHttp.error.error?.email ? (' - ' + errorHttp.error.error?.email) : "";
          alert(mensaje);
        });
      }
    }

}
