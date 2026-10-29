import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface IconoCaracteristica {
  icono: 'casa' | 'gota' | 'filtro' | 'edificio' | 'usuarios' | 'uv';
  texto: string;
}

export interface ProductoOsmosis {
  titulo: string;
  badge?: string;
  descripcion: string;
  imagen: string;
  linkImagen: string;
  caracteristicas: IconoCaracteristica[];
}

@Component({
  selector: 'app-osmosis-inversa-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './osmosis-inversa-page.component.html',
  styleUrl: './osmosis-inversa-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsmosisInversaPageComponent {
  public readonly telefonoWhatsApp: string = '573116852785';
  public terminoBusqueda: string = '';

  constructor(private router: Router) {}

  public readonly productosOsmosis: ProductoOsmosis[] = [
    {
      titulo: 'RO Residencial 280 GPD',
      badge: 'NUEVO',
      descripcion: 'Sistema compacto de ósmosis inversa ideal para hogares. Remueve sales, metales pesados, cloro y otros contaminantes, entregando agua de alta pureza y excelente sabor.',
      imagen: 'assets/img/productos/productosOsmosis/RO_residencial_280_GPD.webp',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosOsmosis/RO_residencial_280_GPD.png',
      caracteristicas: [
        { texto: 'Hogar y apartamentos', icono: 'casa' },
        { texto: '280 GPD (1.06 m³/día)', icono: 'gota' },
        { texto: '6 etapas de filtración', icono: 'filtro' }
      ]
    },
    {
      titulo: 'RO Residencial 600 GPD',
      badge: 'NUEVO',
      descripcion: 'Equipo de ósmosis inversa de mayor capacidad, ideal para viviendas grandes o consumos altos. Incluye sistema de control básico y filtración multietapa.',
      imagen: 'assets/img/productos/productosOsmosis/RO_residencial_600_GPD.webp',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosOsmosis/RO_residencial_600_GPD.png',
      caracteristicas: [
        { texto: 'Viviendas grandes', icono: 'edificio' },
        { texto: '600 GPD (2.27 m³/día)', icono: 'gota' },
        { texto: '6 etapas de filtración', icono: 'filtro' }
      ]
    },
    {
      titulo: 'RO Residencial 1200 GPD',
      badge: 'NUEVO',
      descripcion: 'Sistema de ósmosis inversa de alta capacidad, diseñado para hogares grandes, pequeñas comunidades o aplicaciones especiales. Incluye desinfección por luz ultravioleta.',
      imagen: 'assets/img/productos/productosOsmosis/RO_residencial_1200_GPD_UV.webp',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosOsmosis/RO_residencial_1200_GPD_UV.png',
      caracteristicas: [
        { texto: 'Hogares grandes y uso especial', icono: 'usuarios' },
        { texto: '1200 GPD (4.54 m³/día)', icono: 'gota' },
        { texto: 'Desinfección UV integrada', icono: 'uv' }
      ]
    },
    {
      titulo: 'RO Residencial 100 GPD',
      badge: 'NUEVO',
      descripcion: 'Sistema de ósmosis inversa compacto con configuración mejorada de filtración (LC), ideal para hogares. Proporciona agua segura, libre de sales y con excelente sabor.',
      imagen: 'assets/img/productos/productosOsmosis/RO_residencial_280_GPD_LC.webp',
      linkImagen: 'https://wsacol.com/assets/img/productos/productosOsmosis/RO_residencial_280_GPD_LC.png',
      caracteristicas: [
        { texto: 'Hogar y apartamentos', icono: 'casa' },
        { texto: '100 GPD (1.06 m³/día)', icono: 'gota' },
        { texto: '5 etapas de filtración', icono: 'filtro' }
      ]
    }
  ];

  get productosFiltrados(): ProductoOsmosis[] {
    const filtro = this.terminoBusqueda.toLowerCase().trim();
    if (!filtro) return this.productosOsmosis;
    return this.productosOsmosis.filter(p => p.titulo.toLowerCase().includes(filtro));
  }

  // ver el producto
  public verDetalleProducto(producto: ProductoOsmosis): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Guardamos el producto seleccionado en sessionStorage
    sessionStorage.setItem('productoSeleccionado', JSON.stringify({
      titulo: producto.titulo,
      imagen: producto.imagen,
      linkImagen: producto.linkImagen
    }));
    this.router.navigate(['/productos/osmosis-inversa/producto-OI']);
  }

  public getWhatsAppUrl(producto: ProductoOsmosis): string {
    const mensaje = `Hola! Me interesa cotizar el equipo de ósmosis: ${producto.titulo}. Ver imagen: ${producto.linkImagen}`;
    return `https://wa.me/${this.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  }
}
