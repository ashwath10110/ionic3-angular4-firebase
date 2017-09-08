// import { Component } from '@angular/core';
// import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, private afAuth: AngularFireAuth, private splashScreen: SplashScreen,
    private statusBar: StatusBar) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}