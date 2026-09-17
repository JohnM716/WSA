import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'front-navbar',
  imports: [RouterLink],
  templateUrl: './front-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class FrontNavbarComponent {

  public router = inject(Router);

  @ViewChild('mobileMenuToggle') mobileMenuToggle?: ElementRef<HTMLInputElement>;

  public goHomeAndScrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public closeMenu(detailsElement?: HTMLDetailsElement): void {
    // Cierra el menú desplegable de servicios en desktop si existe
    if (detailsElement) {
      detailsElement.removeAttribute('open');
    }

    // Uncheck al checkbox para cerrar el menú desplegable mobile
    if (this.mobileMenuToggle?.nativeElement) {
      this.mobileMenuToggle.nativeElement.checked = false;
    }
  }

  public goToSection(sectionId: string, detailsElement?: HTMLDetailsElement): void {
    this.closeMenu(detailsElement);

    const scrollToTarget = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      scrollToTarget();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(scrollToTarget, 100);
      });
    }
  }
}
