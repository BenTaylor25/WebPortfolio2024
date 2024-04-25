import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './main-page/hero/hero.component';
import { BioComponent } from './main-page/bio/bio.component';
import { WorkComponent } from './main-page/work/work.component';
import { WorkEntryComponent } from './main-page/work/work-entry/work-entry.component';
import { ProjectsComponent } from './main-page/projects/projects.component';
import { ProjectEntryComponent } from './main-page/projects/project-entry/project-entry.component';
import { EducationComponent } from './main-page/education/education.component';
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
    ProjectsComponent,
    ProjectEntryComponent,
    EducationComponent,
    IconComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
