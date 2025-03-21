import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { MachistometroComponent } from './pages/machistometro/machistometro.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { PqrComponent } from './pages/pqr/pqr.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'podcast', component: PodcastComponent},
      {path: 'pqr', component: PqrComponent},
      {path: 'machistometro', component: MachistometroComponent},
      {path: 'libro', component: LibrosComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
