import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Prestamo } from '@models/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.component.html',
  styleUrls: ['./deudas.component.css']
})
export class DeudasComponent implements OnInit {

  prestamos: Prestamo[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.prestamosNoPagos();
  }

  prestamosNoPagos() {
    this.dataService.getPrestamosSinPagar().subscribe(data => this.prestamos = data);
  }

  pagarDeuda(prestamo: Prestamo) {
    this.dataService.getPagarDeuda(prestamo.id).subscribe(data => {
      if (data) {
        this.prestamos = this.prestamos.filter(ev => ev.id !== prestamo.id);
        this.dataService.valorPago += prestamo.valor;
        Swal.fire({
          title: 'Exito!',
          text: 'Credito pagado',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Credito no pagado',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    })
  }

}
