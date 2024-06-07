import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { midiafisicaComponent} from './midiafisica/midiafisica.component';
import { midiadigitalComponent } from './midiadigital/midiadigital.component';
import { IncluirmidiaComponent } from './incluirmidia/incluirmidia.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    midiafisicaComponent,
    midiadigitalComponent,
    IncluirmidiaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
