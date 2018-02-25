import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  facebook = {
    loggedIn : false,
    name : '',
    email : '',
    profilePicture : ''
  }

  constructor(public navCtrl: NavController,public alertCtrl:AlertController, private fireAuth : AngularFireAuth,
                private changeDetectorRef : ChangeDetectorRef) {

  }

  login(){
    this.navCtrl.push(LoginPage);
    }  
    
  register(){
    this.navCtrl.push(RegisterPage);
  }

  loginWithFacebook(){
    this.fireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res =>{
      console.log('Response : ' + res.user.displayName);
      this.facebook.loggedIn = true;
      this.facebook.name = res.user.displayName;
      this.facebook.email = res.user.email;
      this.facebook.profilePicture = res.user.photoURL;
      this.changeDetectorRef.detectChanges();
      console.log('Value :' + this.facebook.loggedIn);
    } )
    .catch(error => console.log('Error :' + error));
  }

  logoutFromFacebook(){
    this.fireAuth.auth.signOut();
    this.facebook.loggedIn = false;
    this.changeDetectorRef.detectChanges();
    console.log("Logged Out!" + this.facebook.loggedIn);
  }
  

}
