import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './main-page/hero/hero.component';
import { BioComponent } from './main-page/bio/bio.component';
import { WorkComponent } from './main-page/work/work.component';
import { WorkEntryComponent } from './main-page/work/work-entry/work-entry.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeroComponent,
    BioComponent,
    WorkComponent,
    WorkEntryComponent,
    IconComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
