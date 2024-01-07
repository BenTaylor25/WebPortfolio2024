import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroComponent } from './main-page/hero/hero.component';
import { BioComponent } from './main-page/bio/bio.component';
import { WorkComponent } from './main-page/work/work.component';
import { ProjectsComponent } from './main-page/projects/projects.component';
import { EducationComponent } from './main-page/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    HeroComponent,
    BioComponent,
    WorkComponent,
    ProjectsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
