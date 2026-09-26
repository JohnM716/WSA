import { Routes } from "@angular/router";
import { StoreFrontLayoutComponent } from "./layouts/store-front-layout/store-front-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { AutomatizacionPageComponent } from "./pages/automatizacion-page/automatizacion-page.component";
import { TratamientoAguaPageComponent } from "./pages/tratamiento-Agua-page/tratamiento-Agua-page.component";
import { PrivacidadPageComponent } from "./pages/privacidad-page/privacidad-page.component";
import { ProductoPageComponent } from "./pages/producto-page/producto-page.component";
import { PqrsPageComponent } from "./pages/pqrs-page/pqrs-page.component";


export const storeFrontRoutes: Routes = [
  {
    path: '',
    component: StoreFrontLayoutComponent,
    children: [
      {
        path: '',
        component:HomePageComponent,
      },
      {
        path: 'automatizacion',
        component: AutomatizacionPageComponent,
      },
      {
        path: 'tratamientoAgua',
        component: TratamientoAguaPageComponent,
      },
      {
        path: 'privacidad',
        component: PrivacidadPageComponent,
      },
      {
        path: 'productos',
        component: ProductoPageComponent,
      },
      {
        path: 'pqrs',
        component: PqrsPageComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ],
  },

  {
    path: '**',
    redirectTo: '',
  }
];

export default storeFrontRoutes;
