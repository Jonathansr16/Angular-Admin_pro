import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

//Modulos
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GrafDonaComponent } from './graf-dona/graf-dona.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Ngx from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    IncrementadorComponent,
    GrafDonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    Ngx.NgxChartsModule
  ],
  exports: [
    IncrementadorComponent,
    GrafDonaComponent
  ]
})
export class ComponentsModule { }
