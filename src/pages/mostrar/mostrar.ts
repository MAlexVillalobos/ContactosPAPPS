import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html',
})
export class MostrarPage {
  nombre = '';
  telefono = '';
  correo = '';
  facebook = '';
  twitter = '';
  instagram = '';
  img = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = this.navParams.get('nombre');
    this.telefono = this.navParams.get('telefono');
    this.correo = this.navParams.get('correo');
    this.facebook = this.navParams.get('facebook');
    this.twitter = this.navParams.get('twitter');
    this.instagram = this.navParams.get('instagram');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarPage');
  }

}
