import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { RaceComponent } from './race/race.component';
import { MainComponent } from './main/main.component';
import { NextracesComponent } from './nextraces/nextraces.component';
import { TodayraceComponent } from './todayrace/todayrace.component';


@NgModule({
  declarations: [
    AppComponent,
    ThemePickerComponent,
    RaceComponent,
    MainComponent,
    NextracesComponent,
    TodayraceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
