import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-u',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-U.component.html'
})
export class ProductoUComponent implements OnInit {
  public tituloProducto: string = '';
  public imagenProducto: string = '';
  public readonly telefonoWhatsApp: string = '573116852785';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const dataGuardada = sessionStorage.getItem('productoSeleccionado');

    if (dataGuardada) {
      const producto = JSON.parse(dataGuardada);
      this.tituloProducto = producto.titulo;
      this.imagenProducto = producto.imagen;
    } else {
      this.router.navigate(['/404']);
    }
  }

  public regresar(): void {
    this.router.navigate(['/productos/ultrafiltracion']);
  }

  public getWhatsAppUrl(): string {
    const urlPagina = window.location.href;
    const mensaje = `Hola! Me interesa cotizar el equipo de ultrafiltración: ${this.tituloProducto}.\nVer en la web: ${urlPagina}`;
    return `https://wa.me/${this.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  }
}
