import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './tienda/formulario/formulario.component';
import { VentasComponent } from './tienda/ventas/ventas.component';
import { ClientesComponent } from './tienda/clientes/clientes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, VentasComponent, ClientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pizzeria';
}
