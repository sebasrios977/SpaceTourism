import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'space',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: '**',
    redirectTo: 'space',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
