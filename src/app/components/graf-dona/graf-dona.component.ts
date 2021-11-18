import { Component, Input } from '@angular/core';
import { Periodismo } from 'src/app/models/data.models';

@Component({
  selector: 'app-graf-dona',
  templateUrl: './graf-dona.component.html',
  styles: [
  ]
})
export class GrafDonaComponent {

  @Input() title: string = 'Sin titulo';

  Periodismo: any[] = [];
  view: [number, number] = [500, 400];

 // options
 gradient: boolean = true;
 showLegend: boolean = true;
 showLabels: boolean = true;
 isDoughnut: boolean = false;

 colorScheme = {
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
};

constructor() {
  Object.assign(this, { Periodismo });
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
