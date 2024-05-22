import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { midiafisicaComponent} from './midiafisica/midiafisica.component';
import { midiadigitalComponent } from './midiadigital/midiadigital.component';
import { IncluirmidiaComponent } from './incluirmidia/incluirmidia.component';

@NgModule({
  declarations: [
    AppComponent,
    midiafisicaComponent,
    midiadigitalComponent,
    IncluirmidiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'app-midiafisica', component: midiafisicaComponent},
      {path: 'app-midiadigital', component: midiadigitalComponent},
      {path: 'app-incluirmidia', component: IncluirmidiaComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
