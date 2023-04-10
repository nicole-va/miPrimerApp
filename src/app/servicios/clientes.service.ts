import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";
  
  getCliente(filtro?:string, rows?:number, page?:number){
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro) : body;
    body = rows ? body.set('rows', rows) : body;
    body = page ? body.set('page', page) : body;
    return this.http.get<any>(this.baseUrl+"cliente/", {params:body});
  }

  agregarCliente(cliente:Cliente){
    let body = this.getParamsCliente(cliente);
    return this.http.post<any>(this.baseUrl+'cliente/', body);
  }

  getParamsCliente(cliente:Cliente){
    let body = new HttpParams();
    body = cliente.id ? body.set("id",cliente.id) : body;
    body = cliente.nombre ? body.set("nombre",cliente.nombre) : body;
    body = cliente.apellido ? body.set("apellido",cliente.apellido): body;
    body = cliente.telefono ? body.set("telefono",cliente.telefono): body;
    body = cliente.email ? body.set("email",cliente.email): body;
    return body;
  }

  actualizarCliente(cliente:Cliente, id:string){
    let body = this.getParamsCliente(cliente);
    return this.http.put<any>(this.baseUrl+'cliente/' + id, body);
  }

  eliminarCliente(id:string){
    return this.http.delete<any>(this.baseUrl+'cliente/'+id);
  }


}
