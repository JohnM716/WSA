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
  // caracteristicas: IconoCaracteristica[];
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
      descripcion: 'TEXTO',
      imagen: 'assets/img/productos/productosUltrafiltracion/Purificador_membrana_ultrafiltracion.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosUltrafiltracion/Purificador_membrana_ultrafiltracion.png',
      // caracteristicas: [
      //   { texto: 'Hogar y apartamentos', icono: 'casa' },
      //   { texto: '280 GPD (1.06 m³/día)', icono: 'gota' },
      //   { texto: '5 etapas de filtración', icono: 'filtro' }
      // ]
    },
    {
      titulo: 'FILTRO ULTRAFILTRACIÓN 5 ETAPAS 160 LITROS POR HORA',
      badge: 'NUEVO',
      descripcion: 'TEXTO',
      imagen: 'assets/img/productos/productosUltrafiltracion/Sistema_Filtracion_Agua_160_LD.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosUltrafiltracion/Sistema_Filtracion_Agua_160_LD.png',
      // caracteristicas: [
      //   { texto: 'Viviendas grandes', icono: 'edificio' },
      //   { texto: '600 GPD (2.27 m³/día)', icono: 'gota' },
      //   { texto: '6 etapas de filtración', icono: 'filtro' }
      // ]
    },
    {
      titulo: 'FILTRO ULTRAFILTRACIÓN 6 ETAPAS ULTRAVIOLETA 80 LITROS POR HORA',
      badge: 'NUEVO',
      descripcion: 'TEXTO',
      imagen: 'assets/img/productos/productosUltrafiltracion/Sistema_Purificacion_Agua_UF_UV.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosUltrafiltracion/Sistema_Purificacion_Agua_UF_UV.png',
      // caracteristicas: [
      //   { texto: 'Hogares grandes y uso especial', icono: 'usuarios' },
      //   { texto: '1200 GPD (4.54 m³/día)', icono: 'gota' },
      //   { texto: 'Desinfección UV integrada', icono: 'uv' }
      // ]
    },
    {
      titulo: 'Componentes de Filtración y Accesorios',
      badge: 'NUEVO',
      descripcion: 'TEXTO',
      imagen: 'assets/img/productos/productosUltrafiltracion/Componentes_Filtracion_Accesorios.png',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosUltrafiltracion/Componentes_Filtracion_Accesorios.png',
      // caracteristicas: [
      //   { texto: 'Hogar y apartamentos', icono: 'casa' },
      //   { texto: '100 GPD (1.06 m³/día)', icono: 'gota' },
      //   { texto: '5 etapas de filtración', icono: 'filtro' }
      // ]
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
