import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { PodcastComponent } from './views/pages/podcast/podcast.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/views.module').then( m => m.ViewsModule)
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
