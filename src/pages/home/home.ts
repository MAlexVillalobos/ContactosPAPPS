import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';
import { MostrarPage } from '../mostrar/mostrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  agregar = AgregarPage;
  mostrar = MostrarPage;

  constructor(public navCtrl: NavController) {

  }

  Contactos= [
    {
      nombre: "Alex Villalobos",
      tel: "3331319619",
      img: "../assets/imgs/Contacto.png",
      correo: "vc.alejandrovillalobos@gmail.com",
      facebook: "@Alex.Villalobos",
      twitter: "@MalexVillawolf",
      instagram: "@m.alex_villalobos",
    },
    {
      nombre: "Mike el Magnifico",
      tel: "3331319645",
      img: "../assets/imgs/Contacto.png",
      correo: "",
      facebook: "",
      twitter: "",
      instagram: "",
    },

  ];

  clickAgregar(){
    this.navCtrl.push(this.agregar,{diccionario:this.Contactos});
  }

  clickMostrar(Dato){
    this.navCtrl.push(this.mostrar,Dato);
  }

}

