import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from "../pages/principal/principal";
import { BuscurPage } from '../pages/buscur/buscur';
import { VercurPage } from '../pages/vercur/vercur';
import { RegistroPage } from '../pages/registro/registro';
import { DatoscurPage } from '../pages/datoscur/datoscur';
import { InscripcionPage } from '../pages/inscripcion/inscripcion';
import { CursosService } from '../services/curso.service';



import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
	apiKey: "AIzaSyDs3nW6MU7H7k2vqJigEgSLzJNSyVLxA2Y",
    authDomain: "cursoadmin-d281b.firebaseapp.com",
    databaseURL: "https://cursoadmin-d281b.firebaseio.com",
    projectId: "cursoadmin-d281b",
    storageBucket: "cursoadmin-d281b.appspot.com",
    messagingSenderId: "502378859527"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    BuscurPage,
    VercurPage,
    PrincipalPage,
    DatoscurPage,
    InscripcionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    BuscurPage,
    VercurPage,
    PrincipalPage,
    DatoscurPage,
    InscripcionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CursosService
  ]
})
export class AppModule {}
