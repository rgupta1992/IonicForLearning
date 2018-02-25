import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  email : string;
  username : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fireAuth : AngularFireAuth) {
    this.email = this.fireAuth.auth.currentUser.email;
    this.username = this.email.substr(0, this.email.indexOf('@'));
    console.log("username :" + this.username);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

}
