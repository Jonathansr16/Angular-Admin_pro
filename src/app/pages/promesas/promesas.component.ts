import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios => console.log(usuarios) );
  }

  getUsuarios() {

    return new Promise( (resolve) => {

      fetch('https://reqres.in/api/users?page=2')
          .then( resp => resp.json() )
          .then( body => resolve(body.data) )
    });

  }


   // const promesa= new Promise((resolve, reject) => {

    //   if(false) {

    //     //Si resuelve esto
    //     resolve('Hola mundo');
    //   } else {

    //     //si ocurre un error
    //     reject('Error');
    //   }
    // });

    //   //entonces realiza esto
    // promesa.then( (mensaje) => {
    //     console.log(mensaje);
    // })

    // //entonces cacha el error
    //   .catch(error => {
    //     console.log('error en la promesa');
    //   })

    // console.log('fin de Init');


}
