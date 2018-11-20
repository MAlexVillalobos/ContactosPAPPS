import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  nombre='';
  telefono='';
  correo='';
  facebook='';
  twitter='';
  instagram='';
  contactos=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos = this.navParams.get('diccionario');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  clickAdd(){
    if(this.nombre.length==0 || this.telefono.length==0 || this.correo.length==0){
      console.log("Faltan parametros!");
      const alert = this.alertCtrl.create({
        title: "Oops!",
        subTitle: "No llenaste la informacion",
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      this.contactos.push(
        {
          nombre: this.nombre,
          tel: this.telefono,
          img: "../assets/imgs/Contacto.png",
          correo: this.correo,
          facebook: this.facebook,
          twitter: this.twitter,
          instagram: this.instagram,
        }
      );
      this.navCtrl.pop();
    }
  }

}
