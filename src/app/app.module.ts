import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { HomePageModule } from '../pages/home/home.module';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDppuXk4pUUnmCmHSpEMEvpN4MmTshCw2g",
  authDomain: "ionicangular4.firebaseapp.com",
  databaseURL: "https://ionicangular4.firebaseio.com",
  projectId: "ionicangular4",
  storageBucket: "ionicangular4.appspot.com",
  messagingSenderId: "938367919644"
};


@NgModule({
  declarations: [
    MyApp
    // HomePage,
    // LoginPage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    HomePageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    // HomePage,
    // LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule { }
