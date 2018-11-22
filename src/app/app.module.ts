import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';

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
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
