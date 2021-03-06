import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';


const firebaseConfig = {
  apiKey: 'AIzaSyDrAtwGV_yaqLElIu0Xd-TphHTSjf4a3UY',
  authDomain: 'prajwalan-2781b.firebaseapp.com',
  databaseURL: 'https://prajwalan-2781b.firebaseio.com',
  projectId: 'prajwalan-2781b',
  storageBucket: 'prajwalan-2781b.appspot.com',
  messagingSenderId: '268887942654'
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar, OneSignal, AppRate, AppAvailability, Calendar],
  bootstrap: [AppComponent]
})
export class AppModule {}
