import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-u',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-U.component.html'
})
export class ProductoUComponent implements OnInit {
  public tituloProducto: string = '';
  public imagenProducto: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tituloProducto = params['titulo'] || 'TECNOLOGÍA DE ULTRAFILTRACIÓN';
      this.imagenProducto = params['imagen'] || '';
    });
  }

  public regresar(): void {
    this.router.navigate(['/productos/ultrafiltracion']);
  }
}
