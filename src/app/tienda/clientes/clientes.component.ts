import { Component } from '@angular/core';
import { SpedidosService } from '../../spedidos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
  mostrarAlerta = false;
  pedido: any;


  constructor(private servicio: SpedidosService) {
    this.pedido = this.servicio.getPedidoActual();
  }

  eliminarPizza(index: number) {
    this.servicio.eliminarPizza(index);
  }

  confirmarPedido() {
    this.mostrarAlerta = true;
  }

  regresar() {
    this.mostrarAlerta = false;
  }

  confirmar() {
    this.servicio.confirmarPedido();
    this.servicio.habilitarCliente();
    this.mostrarAlerta = false;
    this.pedido = this.servicio.getPedidoActual();
  }
}
