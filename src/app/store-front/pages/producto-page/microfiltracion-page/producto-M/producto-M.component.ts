import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-m',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-M.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ProductoMComponent implements OnInit {
  public tituloProducto: string = '';
  public imagenProducto: string = '';
  public linkImagenProducto: string = '';
  public readonly telefonoWhatsApp: string = '573116852785';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const dataGuardada = sessionStorage.getItem('productoSeleccionado');

    if (dataGuardada) {
      const producto = JSON.parse(dataGuardada);
      this.tituloProducto = producto.titulo;
      this.imagenProducto = producto.imagen;
      this.linkImagenProducto = producto.linkImagen;
    } else {
      this.router.navigate(['/404']);
    }
  }

  public regresar(): void {
    this.router.navigate(['/productos/microfiltracion']);
  }

  public getWhatsAppUrl(): string {
    // const urlPagina = window.location.href;
    const mensaje = `Hola! Me interesa cotizar el equipo de Microfiltración: ${this.tituloProducto}.\nVer en la web: ${this.linkImagenProducto}`;
    return `https://wa.me/${this.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  }
}
