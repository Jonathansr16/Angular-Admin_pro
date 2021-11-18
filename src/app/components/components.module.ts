import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

//Modulos
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GrafDonaComponent } from './graf-dona/graf-dona.component';

@NgModule({
  declarations: [
    IncrementadorComponent,
    GrafDonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
