import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages1/login/login.module';
import { HomePageModule } from '../pages/_home/home.module';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SharedModule } from './shared.module';
import { MODULES, PROVIDERS } from './app.imports';

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
    AngularFireAuthModule,
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    // HomePage,
    // LoginPage
  ],
  providers: [
    PROVIDERS,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule { }

// import { SharedModule } from './shared.module';
// import { NgModule, ErrorHandler } from '@angular/core';
// import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { MyApp } from './app.component';

// import { MODULES, PROVIDERS } from './app.imports';

// @NgModule({
//   declarations: [
//     // App Core
//     MyApp,
//   ],
//   imports: [
//     MODULES,
//     IonicModule.forRoot(MyApp),
//     SharedModule,
//   ],
//   bootstrap: [IonicApp],
//   entryComponents: [
//     MyApp,
//   ],
//   providers: [PROVIDERS, { provide: ErrorHandler, useClass: IonicErrorHandler }]
// })
// export class AppModule { }
