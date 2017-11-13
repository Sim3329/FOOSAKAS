import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{ LoggedinPage} from '../pages/loggedin/loggedin';
import{ RegisterPage} from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {SearchPage} from '../pages/search/search'
import {DotonboriPage} from '../pages/dotonbori/dotonbori';
import {UniversialPage} from '../pages/universial/universial';
import {OsakacastlePage} from '../pages/osakacastle/osakacastle';
import {UkanPage} from '../pages/ukan/ukan';
import {YoshiPage} from '../pages/yoshi/yoshi';
import {SinsaPage} from '../pages/sinsa/sinsa';

const firebaseAuth = {
    apiKey: "AIzaSyAGKTqw954iy6ARsVQWyixoAktED7ZrYqo",
    authDomain: "test-project-58855.firebaseapp.com",
    databaseURL: "https://test-project-58855.firebaseio.com",
    projectId: "test-project-58855",
    storageBucket: "test-project-58855.appspot.com",
    messagingSenderId: "685340970890"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoggedinPage,
    SearchPage,
    DotonboriPage,
    UniversialPage,
    OsakacastlePage,
    UkanPage,
    YoshiPage,
    SinsaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoggedinPage,
    SearchPage,
    DotonboriPage,
    UniversialPage,
    OsakacastlePage,
    UkanPage,
    YoshiPage,
    SinsaPage   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
