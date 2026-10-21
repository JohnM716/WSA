import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface IconoCaracteristica {
  icono: 'casa' | 'gota' | 'filtro' | 'edificio' | 'usuarios' | 'uv';
  texto: string;
}

export interface ProductoMicrofiltracion {
  titulo: string;
  badge?: string;
  descripcion: string;
  imagen: string;
  linkImagen: string;
  // caracteristicas: IconoCaracteristica[];
}

@Component({
  selector: 'app-microfiltracion-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './microfiltracion-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class MicrofiltracionPageComponent {
  public readonly telefonoWhatsApp: string = '573116852785';
  public terminoBusqueda: string = '';

  constructor(private router: Router) {}

  public readonly productosMicrofiltracion: ProductoMicrofiltracion[] = [
    {
      titulo: 'FILTRO DE AGUA 4 ETAPAS CON LUZ ULTRAVIOLETA',
      badge: 'NUEVO',
      descripcion: 'TEXTO',
      imagen: 'assets/img/productos/productosMicrofiltracion/Kit_microfiltro_UV_accesorios.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosMicrofiltracion/Kit_microfiltro_UV_accesorios.png',
      // caracteristicas: [
      //   { texto: 'Hogar y apartamentos', icono: 'casa' },
      //   { texto: '280 GPD (1.06 m³/día)', icono: 'gota' },
      //   { texto: '5 etapas de filtración', icono: 'filtro' }
      // ]
    },
    {
      titulo: 'FILTRO DE 5 ETAPAS CON LUZ ULTRAVIOLETA Y CARTUCHO T33 CARBON CASCARA DE COCO',
      badge: 'NUEVO',
      descripcion: 'TEXTO',
      imagen: 'assets/img/productos/productosMicrofiltracion/Sistema_microfiltracion_UV_y_GAC.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosMicrofiltracion/Sistema_microfiltracion_UV_y_GAC.png',
      // caracteristicas: [
      //   { texto: 'Viviendas grandes', icono: 'edificio' },
      //   { texto: '600 GPD (2.27 m³/día)', icono: 'gota' },
      //   { texto: '6 etapas de filtración', icono: 'filtro' }
      // ]
    },
    {
      titulo: 'FILTRO PURIFICADOR ALCALINIZADOR DE AGUA ULTRAVIOLETA DE 4 ETAPAS',
      badge: 'NUEVO',
      descripcion: 'TEXTO',
      imagen: 'assets/img/productos/productosMicrofiltracion/Kit_Filtración_Agua_4_etapas_+_UV.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosMicrofiltracion/Kit_Filtración_Agua_4_etapas_+_UV.png',
      // caracteristicas: [
      //   { texto: 'Hogares grandes y uso especial', icono: 'usuarios' },
      //   { texto: '1200 GPD (4.54 m³/día)', icono: 'gota' },
      //   { texto: 'Desinfección UV integrada', icono: 'uv' }
      // ]
    },
    {
      titulo: 'Microfiltro de polipropileno termofundido',
      badge: 'NUEVO',
      descripcion: 'TEXTO',
      imagen: 'assets/img/productos/productosMicrofiltracion/Diagrama_técnico_filtro_microfibras.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosMicrofiltracion/Diagrama_técnico_filtro_microfibras.png',
      // caracteristicas: [
      //   { texto: 'Hogar y apartamentos', icono: 'casa' },
      //   { texto: '100 GPD (1.06 m³/día)', icono: 'gota' },
      //   { texto: '5 etapas de filtración', icono: 'filtro' }
      // ]
    }
  ];

  get productosFiltrados(): ProductoMicrofiltracion[] {
    const filtro = this.terminoBusqueda.toLowerCase().trim();
    if (!filtro) return this.productosMicrofiltracion;
    return this.productosMicrofiltracion.filter(p => p.titulo.toLowerCase().includes(filtro));
  }

  // ver el producto
  public verDetalleProducto(producto: ProductoMicrofiltracion): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Guardamos el producto seleccionado en sessionStorage
  sessionStorage.setItem('productoSeleccionado', JSON.stringify({
    titulo: producto.titulo,
    imagen: producto.imagen,
    linkImagen: producto.linkImagen
  }));

  // Navegamos directamente sin parámetros en la URL
  this.router.navigate(['/productos/microfiltracion/producto-M']);
}

  public getWhatsAppUrl(producto: ProductoMicrofiltracion): string {
    const mensaje = `Hola! Me interesa cotizar el equipo de Microfiltración: ${producto.titulo}. Ver imagen: ${producto.linkImagen}`;
    return `https://wa.me/${this.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  }
}
