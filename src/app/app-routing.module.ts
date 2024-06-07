import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncluirmidiaComponent } from './incluirmidia/incluirmidia.component';
import { midiadigitalComponent } from './midiadigital/midiadigital.component';
import { midiafisicaComponent } from './midiafisica/midiafisica.component';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./app.module').then(m => m.AppModule)
  },
  {
    path: 'app-midiafisica',
    component: midiafisicaComponent
  },
  {
    path: 'app-midiadigital',
    component: midiadigitalComponent
  },
  {
    path: 'app-incluirmidia',
    component: IncluirmidiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
