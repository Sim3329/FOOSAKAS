import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import{ RegisterPage} from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';




@IonicPage()
@Component({
  selector: 'page-home',
    templateUrl: 'home.html'
  })
export class HomePage {

	@ViewChild('userEmail') user;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

     ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   alert(message: string){
    this.alertCtrl.create({
       title: ':Info!',
      subTitle: message,
      buttons: ['OK']

    }).present();
  }
 signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log('got some logged in', this.fire.auth.currentUser);
      this.alert('Success! You are logged in');
      this.navCtrl.setRoot(LoggedinPage);
      //user to logged in
    })
    .catch(error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
    console.log("would sign in with", this.user.value, this.password.value);
  }


 
      //alert 이용해야함
 
  register(){
    this.navCtrl.push(RegisterPage);
  }
  
}
  		

   

  	 