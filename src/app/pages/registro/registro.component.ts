import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PagoCreditop } from '@models/usuario';
import { DataService } from '@services/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  pagoCredito = [{ nombre: 'Si', valor: PagoCreditop.si }, { nombre: 'No', valor: PagoCreditop.no }];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.formularioRegistro();
  }

  get noNombre() {
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }
  get noCorreo() {
    return this.form.get('correo').invalid && this.form.get('correo').touched;
  }
  get noCedula() {
    return this.form.get('cedula').invalid && this.form.get('cedula').touched;
  }
  get noValorSolicitado() {
    return this.form.get('valorSolicitado').invalid && this.form.get('valorSolicitado').touched;
  }
  get noPagoCredito() {
    return this.form.get('pagoCredito').invalid && this.form.get('pagoCredito').touched;
  }

  get noAprobado() {
    return this.form.get('aprobado').invalid && this.form.get('aprobado').touched;
  }

  ngOnInit(): void {
  }

  formularioRegistro() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      cedula: ['', Validators.required],
      valorSolicitado: ['', Validators.required],
      fechaPagar: [''],
      aprobado: [false, Validators.required],
      pagoCredito: ['', Validators.required]
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
      this.dataService.postRegistroUsuario(this.form.value).subscribe(data => {
        this.form.reset({
          aprobado: false
        });
        Swal.fire({
          title: 'Exito!',
          text: 'Usuario registrado',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      });
    }
  }

}
