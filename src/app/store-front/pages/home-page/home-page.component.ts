import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class HomePageComponent {

  public goHomeAndScrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async enviarFormulario(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xvkolqwk', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      const modal = document.getElementById('modal_exito') as HTMLDialogElement;
      modal?.showModal();
    }
  }

}
