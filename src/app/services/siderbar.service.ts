import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {


  menu: any [] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'progressBarr', url: 'progress'},
        { titulo: 'Grafica', url: 'grafica'}
      ]
    }
  ]

  constructor() { }


}
