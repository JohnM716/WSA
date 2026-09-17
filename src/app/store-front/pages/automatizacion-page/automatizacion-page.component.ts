import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automatizacion-page',
  imports: [],
  templateUrl: './automatizacion-page.Component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AutomatizacionPageComponent {
  private router = inject(Router);

  public goToSection(sectionId: string): void {
    // Navega al home ('/') y luego hace scroll al elemento objetivo
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }
}
