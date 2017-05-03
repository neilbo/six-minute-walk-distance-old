import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ControlMessages } from '../utils/control-messages';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ImperialForm } from '../components/imperial-form/imperial-form';
import { MetricForm } from '../components/metric-form/metric-form';
import { SettingsService } from '../providers/settings-service';
import { CalculateService } from '../providers/calculate-service';
import { ConversionService } from '../providers/conversion-service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    ControlMessages,
    ImperialForm,
    MetricForm,
    AboutPage,
    SettingsPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ControlMessages,
    ImperialForm,
    MetricForm,
    AboutPage,
    SettingsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SettingsService,
    CalculateService,
    ConversionService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
