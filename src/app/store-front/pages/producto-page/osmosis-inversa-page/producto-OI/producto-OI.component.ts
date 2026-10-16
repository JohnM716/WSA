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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tituloProducto = params['titulo'] || 'Equipo de Ósmosis Inversa';
      this.imagenProducto = params['imagen'] || '';
    });
  }

  public regresar(): void {
    this.router.navigate(['/productos/osmosis-inversa']);
  }
}
