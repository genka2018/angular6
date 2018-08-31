import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent }  from './layouts/header';
import { BannerComponent }  from './layouts/banner';
import { WelcomeComponent }  from './layouts/welcome';
import { OptionsComponent }  from './layouts/options';
import { WorksComponent }  from './layouts/works';
import { InteresComponent }  from './layouts/interes';
import { SliderComponent }  from './layouts/slider';
import { FooterComponent }  from './layouts/footer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    WelcomeComponent,
    OptionsComponent,
    WorksComponent,
    InteresComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
