import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routingComponents = [
  HeaderComponent,
  MainPageComponent,
];

const routes: Routes = [
  { path: '', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
