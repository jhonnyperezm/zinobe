import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '@models/usuario';
import { DataService } from '@services/data.service';
import { ValidatorService } from '@services/validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {

  form: FormGroup;
  @Input() usuarios: Usuario[];
  @Output() valorPrestado = new EventEmitter<number>();


  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.formularioRegistro();
  }

  ngOnInit(): void {
  }

  get noUsuario() {
    return this.form.get('usuario').invalid && this.form.get('usuario').touched;
  }

  get noValor() {
    return this.form.get('valor').invalid && this.form.get('valor').touched;
  }

  formularioRegistro() {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      valor: ['', [Validators.required, ValidatorService.rangoNumerico(10000, 100000)]]
    });
  }

  guardarRegistro() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(e => e.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    } else {
      const prestamo = {
        usuario: {
          id: this.form.controls.usuario.value
        },
        pagada: false,
        valor: this.form.controls.valor.value
      };

      this.dataService.postCreatePrestamo(prestamo).subscribe(data => {
        if (data) {
          this.form.reset();
          this.valorPrestado.emit(prestamo.valor);
          Swal.fire({
            title: 'Exito!',
            text: 'Prestamo aprobado',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Credito denegado',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }

      });
    }
  }

}
