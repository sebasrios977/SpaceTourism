import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { CrewPageComponent } from './crew-page/crew-page.component';
import { TechnologyPageComponent } from './technology-page/technology-page.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    HomePageComponent,
    DestinationPageComponent,
    CrewPageComponent,
    TechnologyPageComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
