import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,public alertCtrl:AlertController, private fireAuth: AngularFireAuth) {

  }

  showAlert(title: string, message: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  signIn(){
    this.fireAuth.auth.signInWithEmailAndPassword(this.username.value + '@domain.xta', this.password.value)
      .then(data =>{
          this.showAlert('Success!', 'You are successfully logged in.')
          this.navCtrl.setRoot(LoggedinPage);
      })
      
      .catch(error =>
          this.showAlert('Failed!','Invalid username or password :'+ error.message));
    } 
  }  
  

