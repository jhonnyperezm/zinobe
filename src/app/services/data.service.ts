import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario, Prestamo } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Https: HttpClient) { }

  public valorPago = environment.capitalBanco;

  postRegistroUsuario(usuario: Usuario) {
    return this.Https.post(`${environment.url}usuarios`, usuario);
  }

  getListarClientes() {
    return this.Https.get<Usuario[]>(`${environment.url}usuarios`);
  }

  postCreatePrestamo(prestamo) {
    return this.Https.post(`${environment.url}prestamos`, prestamo);
  }

  getPrestamosPorUsuario(idUsuario, estado) {
    return this.Https.get<Prestamo[]>(`${environment.url}prestamos/${idUsuario}/${estado}`);
  }

  getPrestamosSinPagar() {
    return this.Https.get<Prestamo[]>(`${environment.url}prestamos/prestamosNoPagos`);
  }

  getPagarDeuda(id) {
    return this.Https.get<Prestamo[]>(`${environment.url}prestamos/pagarDeuda/${id}`);
  }

}
