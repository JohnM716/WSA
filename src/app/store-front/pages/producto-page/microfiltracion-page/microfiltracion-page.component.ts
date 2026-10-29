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
  caracteristicas: IconoCaracteristica[];
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
      descripcion: 'Ofrece agua de buena calidad. Retiene sólidos disueltos suspendidos y microorganismos. Ofrece muy buen manejo de la turbiedad, olor, sabor y su etapa de Ultravioleta garantiza 100% de manejo de contaminación microbiológica.',
      imagen: 'assets/img/productos/productosMicrofiltracion/Kit_microfiltro_UV_accesorios.webp',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosMicrofiltracion/Kit_microfiltro_UV_accesorios.png',
      caracteristicas: [
        { texto: 'Hogar y apartamentos', icono: 'casa' },
        { texto: '4 etapas de filtración', icono: 'filtro' }
      ]
    },
    {
      titulo: 'FILTRO DE AGUA 4 ETAPAS CON LUZ ULTRAVIOLETA Y CARTUCHO T33 CARBÓN CÁSCARA DE COCO',
      badge: 'NUEVO',
      descripcion: 'Ofrece agua de buena calidad. Retiene sólidos disueltos suspendidos y microorganismos. Ofrece muy buen manejo de la turbiedad, olor, sabor y su etapa de Ultravioleta garantiza 100% de manejo de contaminación microbiológica.',
      imagen: 'assets/img/productos/productosMicrofiltracion/Sistema_microfiltracion_UV_y_GAC.webp',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosMicrofiltracion/Sistema_microfiltracion_UV_y_GAC.png',
      caracteristicas: [
        { texto: 'Hogar y apartamentos', icono: 'casa' },
        { texto: '4 etapas de filtración', icono: 'filtro' }
      ]
    },
    {
      titulo: 'FILTRO PURIFICADOR ALCALINIZADOR DE AGUA ULTRAVIOLETA DE 4 ETAPAS',
      badge: 'NUEVO',
      descripcion: 'Ofrece agua de buena calidad. Retiene sólidos disueltos suspendidos y microorganismos. Ofrece muy buen manejo de la turbiedad, olor, sabor y su etapa de Ultravioleta garantiza 100% de manejo de contaminación microbiológica. Este modelo está especialmente diseñado para dar solución al mercado urbano con agua pretratada con medianos índices de contaminación.',
      imagen: 'assets/img/productos/productosMicrofiltracion/Kit_Filtración_Agua_4_etapas_+_UV.webp',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosMicrofiltracion/Kit_Filtración_Agua_4_etapas_+_UV.png',
      caracteristicas: [
        { texto: 'Hogar y apartamentos', icono: 'casa' },
        { texto: '4 etapas de filtración', icono: 'filtro' }
      ]
    },
    {
      titulo: 'Microfiltro de polipropileno termofundido',
      badge: 'NUEVO',
      descripcion: 'Los microfiltros de polipropileno termofundido están diseñados para la retención de partículas sólidas en suspensión, sedimentos, arena, óxido y otras impurezas presentes en el agua. Su estructura de fibras entrelazadas permite realizar una filtración mecánica eficiente, contribuyendo a mejorar la calidad del agua y a proteger los equipos instalados aguas abajo.',
      imagen: 'assets/img/productos/productosMicrofiltracion/Diagrama_técnico_filtro_microfibras.webp',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosMicrofiltracion/Diagrama_técnico_filtro_microfibras.png',
      caracteristicas: [
        { texto: 'Hogar y apartamentos', icono: 'casa' },
        // { texto: '5 etapas de filtración', icono: 'filtro' }
      ]
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
