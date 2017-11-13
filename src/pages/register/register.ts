import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	@ViewChild('userEmail') user;
	@ViewChild('password') password;
  @ViewChild('username') usern;
  @ViewChild('checkpassword') ckpass;


  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

   alert(message: string){
    this.alertCtrl.create({
       title: ':Info!',
      subTitle: message,
      buttons: ['OK']

    }).present();
  }

  showAlert(){
    this.alertCtrl.create({
       title: '비밀번호제한',
      subTitle: '비밀번호는7자이상입니다',
      buttons: ['OK']

    }).present();
  }

  appearAlert(){
    this.alertCtrl.create({
      title: '비밀번호 확인',
      subTitle: '비빌번호를 다시 확인해주시기 바랍니다',
      buttons:['OK']
    }).present();
  }

  registerUser(){
     if(this.password.value.length < 7){
        this.showAlert();
      }
      else if(this.password.value != this.ckpass.value){
        this.appearAlert();
      }
      else{

    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data =>{
      console.log('got data', data);
      this.alert('register!');
    
    })
    .catch(error=>{
      console.log('got an error', error);
    });
  	console.log('Would registerw user with', this.user.value, this.password.value);
  }
}
}