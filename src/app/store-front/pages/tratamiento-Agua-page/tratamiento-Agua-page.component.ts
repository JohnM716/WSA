import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tratamiento-agua-page',
  imports: [RouterLink],
  templateUrl: './tratamiento-Agua-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class TratamientoAguaPageComponent {
  private router = inject(Router);

  public goToSection(sectionId: string): void {
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
