import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { CrewPageComponent } from './crew-page/crew-page.component';
import { TechnologyPageComponent } from './technology-page/technology-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'destination', component: DestinationPageComponent },
      { path: 'crew', component: CrewPageComponent },
      { path: 'technology', component: TechnologyPageComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
