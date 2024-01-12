import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroComponent } from './main-page/hero/hero.component';
import { BioComponent } from './main-page/bio/bio.component';
import { WorkComponent } from './main-page/work/work.component';
import { ProjectsComponent } from './main-page/projects/projects.component';
import { EducationComponent } from './main-page/education/education.component';

export const routingComponents = [
  HeaderComponent,
  MainPageComponent,
  HeroComponent,
  BioComponent,
  WorkComponent,
  ProjectsComponent,
  EducationComponent
];

const routes: Routes = [
  { path: '', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
