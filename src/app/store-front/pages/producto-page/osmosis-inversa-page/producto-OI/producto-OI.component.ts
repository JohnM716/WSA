import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-oi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-OI.component.html'
})
export class ProductoOIComponent implements OnInit {
  public tituloProducto: string = '';
  public imagenProducto: string = '';
  public linkImagenProducto: string = '';
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
      this.linkImagenProducto = producto.linkImagen;
    } else {
      this.router.navigate(['/404']);
    }
  }

  public regresar(): void {
    this.router.navigate(['/productos/osmosis-inversa']);
  }

  public getWhatsAppUrl(): string {
    // const urlPagina = window.location.href;
    const mensaje = `Hola! Me interesa cotizar el equipo de ósmosis: ${this.tituloProducto}.\nVer en la web: ${this.linkImagenProducto}`;
    return `https://wa.me/${this.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  }
}
