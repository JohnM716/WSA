import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface IconoCaracteristica {
  icono: 'casa' | 'gota' | 'filtro' | 'edificio' | 'usuarios' | 'uv';
  texto: string;
}

export interface ProductoUltrafiltracion {
  titulo: string;
  badge?: string;
  descripcion: string;
  imagen: string;
  linkImagen: string;
  caracteristicas: IconoCaracteristica[];
}

@Component({
  selector: 'app-ultrafiltracion-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './ultrafiltracion-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class UltrafiltracionPageComponent {
public readonly telefonoWhatsApp: string = '573116852785';
  public terminoBusqueda: string = '';

  constructor(private router: Router) {}

  public readonly productosUltrafiltracion: ProductoUltrafiltracion[] = [
    {
      titulo: 'FILTRO ULTRAFILTRACIÓN 4 ETAPAS 80 LITROS POR HORA',
      badge: 'NUEVO',
      descripcion: 'Membrana de poro muy pequeño (por debajo de 0,1 micra), diseñada para eliminar sólidos en suspensión (ofrece muy buen manejo de la turbiedad) y microorganismos.',
      imagen: 'assets/img/productos/productosUltrafiltracion/Purificador_membrana_ultrafiltracion.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosUltrafiltracion/Purificador_membrana_ultrafiltracion.png',
      caracteristicas: [
        { texto: 'Hogar y apartamentos', icono: 'casa' },
        { texto: '4 etapas de filtración', icono: 'filtro' }
      ]
    },
    {
      titulo: 'FILTRO ULTRAFILTRACIÓN 5 ETAPAS 160 LITROS POR HORA',
      badge: 'NUEVO',
      descripcion: 'Membrana de poro muy pequeño (por debajo de 0,1 micra), para eliminar sólidos en suspensión (ofrece muy buen manejo de la turbiedad) y microorganismos.',
      imagen: 'assets/img/productos/productosUltrafiltracion/Sistema_Filtracion_Agua_160_LD.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosUltrafiltracion/Sistema_Filtracion_Agua_160_LD.png',
      caracteristicas: [
        { texto: 'Hogar y apartamentos', icono: 'casa' },
        { texto: '5 etapas de filtración', icono: 'filtro' }
      ]
    },
    {
      titulo: 'FILTRO ULTRAFILTRACIÓN 6 ETAPAS ULTRAVIOLETA 80 LITROS POR HORA',
      badge: 'NUEVO',
      descripcion: 'La filtración de agua con ultrafiltración consiste en el tratamiento del agua con una membrana de poro muy pequeño (por debajo de 0,1 micra), que elimina sólidos en suspensión (turbidez) y microorganismos.',
      imagen: 'assets/img/productos/productosUltrafiltracion/Sistema_Purificacion_Agua_UF_UV.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosUltrafiltracion/Sistema_Purificacion_Agua_UF_UV.png',
      caracteristicas: [
        { texto: 'Hogar y apartamentos', icono: 'casa' },
        { texto: '6 etapas de filtración', icono: 'filtro' }
      ]
    },
    {
      titulo: 'Componentes de Filtración y Accesorios',
      badge: 'NUEVO',
      descripcion: 'En WSA ofrecemos un portafolio integral de repuestos, consumibles y accesorios para sistemas de tratamiento y purificación de agua, incluyendo microfiltración, ultrafiltración, ósmosis inversa, filtración convencional y otras tecnologías.',
      imagen: 'assets/img/productos/productosUltrafiltracion/Componentes_Filtracion_Accesorios.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosUltrafiltracion/Componentes_Filtracion_Accesorios.png',
      caracteristicas: [
        { texto: 'Hogar y apartamentos', icono: 'casa' },
        // { texto: '5 etapas de filtración', icono: 'filtro' }
      ]
    }
  ];

  get productosFiltrados(): ProductoUltrafiltracion[] {
    const filtro = this.terminoBusqueda.toLowerCase().trim();
    if (!filtro) return this.productosUltrafiltracion;
    return this.productosUltrafiltracion.filter(p => p.titulo.toLowerCase().includes(filtro));
  }

  // ver el producto
    public verDetalleProducto(producto: ProductoUltrafiltracion): void {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Guardamos el producto seleccionado en sessionStorage
      sessionStorage.setItem('productoSeleccionado', JSON.stringify({
        titulo: producto.titulo,
        imagen: producto.imagen,
        linkImagen: producto.linkImagen
      }));
      // Navegamos directamente sin parámetros en la URL
      this.router.navigate(['/productos/ultrafiltracion/producto-U']);
    }

  public getWhatsAppUrl(producto: ProductoUltrafiltracion): string {
    const mensaje = `Hola! Me interesa cotizar el equipo de Ultrafiltración: ${producto.titulo}. Ver imagen: ${producto.linkImagen}`;
    return `https://wa.me/${this.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  }
}
