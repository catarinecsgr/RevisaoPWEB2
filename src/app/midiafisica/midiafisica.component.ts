import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-midiafisica',
  templateUrl: './midiafisica.component.html',
  styleUrls: ['./midiafisica.component.css']
})
export class midiafisicaComponent implements OnInit {

  public list: any[];
  constructor(
    private readonly appComponent: AppComponent,
  ) {
    this.list = appComponent.listaMidiaFisica;
  }
  title = 'Mídia Física';
  ngOnInit(): void {
  }

}
