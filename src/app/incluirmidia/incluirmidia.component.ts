import { Router } from '@angular/router';
import { AppComponent } from './../app.component';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incluirmidia',
  templateUrl: './incluirmidia.component.html',
  styleUrls: ['./incluirmidia.component.css']
})
export class IncluirmidiaComponent implements OnInit {

  @Output() public fisica: any;
  @Output() public digital: any;
  public selectType: string = "";

  constructor(
    private readonly appComponent: AppComponent,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  public addMidia() {
    console.log(this.selectType);
    if (!this.selectType) {
      return;
    }

    if (this.selectType === "1") {
      console.log('Tipo físico');
      this.appComponent.listaMidiaFisica.push({ description: "aaaaaaaaaaaaaa" });
      this.router.navigate(['app'], { replaceUrl: true });
    }

    if (this.selectType === "2") {
      console.log('Tipo digital');
    }
  }
}
