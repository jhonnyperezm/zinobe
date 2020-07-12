import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Usuario, Prestamo } from '@models/usuario';
declare const $;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listadoClientes: Usuario[];
  valorprestadoUsuario: number;
  prestamosUsario: Prestamo[];
  nombreCliente: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.listarClientesBanco();
  }

  listarClientesBanco() {
    this.dataService.getListarClientes().subscribe(data => this.listadoClientes = data);
  }

  verPrestamos(id, estado: boolean) {
    this.dataService.getPrestamosPorUsuario(id, estado).subscribe(data => {
      this.prestamosUsario = data;
      $('#creditosUsuario').modal({ backdrop: 'static' });
    });
  }

  valorPrestado(valor) {
    this.dataService.valorPago -= valor;
  }


}
