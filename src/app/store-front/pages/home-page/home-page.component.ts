import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class HomePageComponent {

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
