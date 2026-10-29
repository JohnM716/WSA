import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Producto {
  titulo: string;
  badge?: string;
  descripcion: string;
  imagen: string;
  route: string;
  actionText?: string;
}

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-page.component.html',
  styleUrl: './producto-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductoPageComponent {
  private router = inject(Router);

  public readonly productos: Producto[] = [
    {
      titulo: 'TECNOLOGÍA de Ósmosis Inversa',
      badge: 'DESTACADO',
      descripcion: 'La ósmosis inversa emplea una membrana semipermeable de alta capacidad de separación, capaz de reducir sales disueltas, metales, microorganismos y diversas sustancias presentes en el agua. Es una de las tecnologías más utilizadas para producir agua de alta pureza en aplicaciones residenciales, especialmente para consumo directo y preparación de alimentos.',
      imagen: 'assets/img/osmosisGeneral.webp',
      route: '/productos/osmosis-inversa',
      actionText: 'Ver productos',
    },
    {
      titulo: 'TECNOLOGÍA de Microfiltración',
      badge: 'NUEVO',
      descripcion: 'La microfiltración utiliza membranas o medios filtrantes con poros muy pequeños que permiten retener sedimentos, partículas, sólidos suspendidos y algunas bacterias. Es una alternativa ideal como etapa de filtración inicial para mejorar la claridad y apariencia del agua, además de proteger las etapas posteriores del sistema.',
      imagen: 'assets/img/microfiltracionGeneral.webp',
      route: '/productos/microfiltracion',
      actionText: 'Ver productos',
    },
    {
      titulo: 'TECNOLOGÍA de Ultrafiltración',
      badge: 'EFICIENTE',
      descripcion: 'La ultrafiltración utiliza membranas con poros aún más pequeños que los de la microfiltración. Permite reducir de manera significativa partículas, coloides, turbidez, bacterias y otros microorganismos, conservando gran parte de los minerales naturalmente presentes en el agua. Es una tecnología utilizada para obtener agua de alta calidad sin necesidad de eliminar completamente las sales disueltas.',
      imagen: 'assets/img/ultrafiltracionGeneral.webp',
      route: '/productos/ultrafiltracion',
      actionText: 'Ver productos',
    },
  ];

  // Maneja la navegación interna al hacer clic en la tarjeta
  public handleCardClick(producto: Producto, event: Event): void {
    event.preventDefault();
    if (producto.route) {
      this.router.navigate([producto.route]);
    }
  }
}
