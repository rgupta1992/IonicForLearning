import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,public alertCtrl:AlertController,private fireAuth : AngularFireAuth) {

  }

  showAlert(title: string, message: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  createAccount(){

    this.fireAuth.auth.createUserWithEmailAndPassword(this.username.value + '@domain.xta', this.password.value)
      .then( data => {
        console.log('data ', data);
        this.showAlert('Info !', 'Registered Successfully !');
        this.navCtrl.setRoot(LoginPage);
      })
      .catch(error =>{ 
        console.log('error ', error);
        this.showAlert('Info !', error.message);
      });
      
      console.log('Would register user with : ' + this.username.value + " " + this.password.value);
      }
   
  }  