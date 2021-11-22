import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  //Index.html
  private linkTheme = document.querySelector('#theme');

  constructor() {
      //Asignamos el tema por default
      const url= localStorage.getItem('theme') || '.assets/css/colors/purple-dark.css';
      this.linkTheme?.setAttribute('href', url);
  }


  changeTheme(theme: string){

    const url= `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url)

    //guardamos el theme
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
    }

    checkCurrentTheme() {

      const links = document.querySelectorAll('.selector');

      //Eliminamos la clase working
     links.forEach( element => {
      element.classList.remove('working');

      const btnTheme= element.getAttribute('data-theme');
      const btnUrl= `./assets/css/colors/${btnTheme}.css`;
      const currentTheme= this.linkTheme?.getAttribute('href');

         if( btnUrl=== currentTheme ) {
               //si hacen match agregamos la clase working
               element.classList.add('working');
         }

      });
     }


}
