import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pqrs-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pqrs-page.component.html',
  styleUrls: ['./pqrs-page.component.css']
})
export class PqrsPageComponent {
  formData = {
    tipo: '',
    nombre: '',
    identificacion: '',
    tipoPersona: '',
    nit: '',
    descripcion: '',
    aceptaDatos: false
  };

  radicadoActual: string = '';

  ngOnInit() {
    this.generarRadicado();
  }

  generarRadicado() {
    let ultimoRadicado = parseInt(localStorage.getItem('wsacol_ultimo_radicado') || '1000000', 10);
    ultimoRadicado++;
    localStorage.setItem('wsacol_ultimo_radicado', ultimoRadicado.toString());
    this.radicadoActual = ultimoRadicado.toString();
  }

  async enviarFormulario(event: Event) {
    event.preventDefault();

    if (!this.formData.aceptaDatos) {
      alert('Debes autorizar el tratamiento de datos personales para continuar.');
      return;
    }

    const form = event.target as HTMLFormElement;

    // Preparamos los datos limpios para Formspree
    const datosEnvio = {
      radicado: this.radicadoActual,
      tipo: this.formData.tipo,
      nombre: this.formData.nombre,
      identificacion: this.formData.identificacion,
      tipoPersona: this.formData.tipoPersona,
      nit: this.formData.tipoPersona === 'Empresa' ? this.formData.nit : 'N/A',
      descripcion: this.formData.descripcion
    };

    try {
      const response = await fetch('https://formspree.io/f/xvkolqwk', {
        method: 'POST',
        body: JSON.stringify(datosEnvio),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        const modal = document.getElementById('modal_exito') as HTMLDialogElement;
        if (modal) {
          modal.showModal();
        }
      } else {
        alert('Hubo un error al enviar la PQRS. Intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('Error de conexión al enviar el formulario.');
    }
  }

  reiniciarFormulario() {
    this.formData = {
      tipo: '',
      nombre: '',
      identificacion: '',
      tipoPersona: '',
      nit: '',
      descripcion: '',
      aceptaDatos: false
    };
    this.generarRadicado();
  }
}
