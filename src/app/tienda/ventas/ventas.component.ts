import { Component } from '@angular/core';
import { SpedidosService } from '../../spedidos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventas.component.html',
  
})
export class VentasComponent {
  ventas: any[] = [];
  totalVentas: number = 0;


  constructor(private servicio: SpedidosService) {}

  verVentasPorDia(dia: string) {
    this.ventas = this.servicio.VentasPorDia(dia);
    this.calcularTotalVentas();
  }

  verVentasPorMes(mes: string) {
    this.ventas = this.servicio.VentasPorMes(mes);
    this.calcularTotalVentas();
  }
  calcularTotalVentas() {
    let total = 0; 
    for (let i = 0; i < this.ventas.length; i++) {
        total += this.ventas[i].total; 
    }
    this.totalVentas = total; 
}

}
