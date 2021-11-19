import { Component, Input } from '@angular/core';
import { PerdDataService } from 'src/app/services/perd-data.service';

@Component({
  selector: 'app-graf-dona',
  templateUrl: './graf-dona.component.html',
  styleUrls: ['./graf-dona.component.css']
})
export class GrafDonaComponent {

  @Input() title: string = 'Sin titulo';
  @Input('etiquetas') labels:  [string, string, string] = ["label1", "label2", "label3"];
  @Input('resultados') results: Object =  {
        name: null,
        number: null
      }
   
  view: [number, number] = [900, 400];
 // options
 gradient: boolean = true;
 showLegend: boolean = true;
 showLabels: boolean = true;
 isDoughnut: boolean = false;


constructor(private per: PerdDataService) {}

get periodismo2() {
  return this.per.PerdiodismoData;
  }


onSelect(data: Event): void {
  console.log('Item clicked', JSON.parse(JSON.stringify(data)));
}

onActivate(data: Event): void {
  console.log('Activate', JSON.parse(JSON.stringify(data)));
}

onDeactivate(data: Event): void {
  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
}

}
