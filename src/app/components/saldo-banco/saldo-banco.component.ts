import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '@services/data.service';


@Component({
  selector: 'app-saldo-banco',
  templateUrl: './saldo-banco.component.html',
  styleUrls: ['./saldo-banco.component.css']
})
export class SaldoBancoComponent implements OnInit, OnChanges {

  public fondoBanco: number = environment.capitalBanco;
  @Input() valorprestadoUsuario: number;

  constructor(public dataService: DataService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.valorprestadoUsuario.currentValue !== undefined) {
      this.fondoBanco -= changes.valorprestadoUsuario.currentValue;
    }
  }
  ngOnInit(): void {
  }

}
