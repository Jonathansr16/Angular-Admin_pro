import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public label1: [string, string, string] = ["Pan", "Refresco", "Tacos"];
  
  public data1 = [
    [10, 15, 40],
  ];

}
