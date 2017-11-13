import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {DotonboriPage} from '../dotonbori/dotonbori';
import {UniversialPage} from '../universial/universial';
import {OsakacastlePage} from '../osakacastle/osakacastle';
import {UkanPage} from '../ukan/ukan';
import {YoshiPage} from '../yoshi/yoshi';
import {SinsaPage} from '../sinsa/sinsa';
import { LoggedinPage } from '../loggedin/loggedin';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  dotonbori(){
  	this.navCtrl.push(DotonboriPage);
  }

  universial(){
  	this.navCtrl.push(UniversialPage);
  }

  osakacastle(){
  	this.navCtrl.push(OsakacastlePage);
  }

  ukan(){
  	this.navCtrl.push(UkanPage);
  }

  yoshi(){
  	this.navCtrl.push(YoshiPage);
  }

  sinsa(){
  	this.navCtrl.push(SinsaPage);
  }

  back(){
    this.navCtrl.push(LoggedinPage);
  }
}
