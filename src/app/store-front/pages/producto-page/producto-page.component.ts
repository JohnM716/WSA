import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

// Interfaz para tipar cada producto
export interface Producto {
  titulo: string;
  badge?: string;
  descripcion: string;
  imagen: string;
  linkImagen: string;
}

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './producto-page.component.html',
  styleUrl: './producto-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductoPageComponent {
  private router = inject(Router);

  public readonly telefonoWhatsApp: string = '573116852785';

  // Arreglo de productos accesible por el HTML
  public readonly productos: Producto[] = [
    {
      titulo: 'Purificador de Agua Hogar',
      badge: 'DESTACADO',
      descripcion: 'Sistema de filtración residencial múltiple etapa para agua limpia y pura.',
      imagen: 'assets/img/HogarAgua2.png',
      linkImagen: 'https://wsacol.com/assets/img/HogarAgua2.png',
    },
    {
      titulo: 'Filtro Ablandador de Agua',
      badge: 'NUEVO',
      descripcion: 'Elimina la dureza del agua protegiendo tuberías y electrodomésticos del hogar.',
      imagen: 'assets/img/HogarAgua2.png',
      linkImagen: 'https://wsacol.com/assets/img/HogarAgua2.png',
    },
    {
      titulo: 'Sistema UV Desinfectante',
      badge: 'EFICIENTE',
      descripcion: 'Esterilización mediante luz ultravioleta libre de químicos para el agua del hogar.',
      imagen: 'assets/img/HogarAgua2.png',
      linkImagen: 'https://wsacol.com/assets/img/HogarAgua2.png',
    },
  ];

  // Método auxiliar para construir el enlace a WhatsApp limpiando caracteres
  public getWhatsAppUrl(producto: Producto): string {
    const mensaje = `Hola! Me interesa cotizar el producto: ${producto.titulo}. Ver imagen: ${producto.linkImagen}`;
    return `https://wa.me/${this.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  }

  public goToSection(sectionId: string): void {
    this.router.navigate(['/tratamientoAgua']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
}
