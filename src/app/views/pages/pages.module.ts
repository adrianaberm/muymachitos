import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PodcastComponent } from './podcast/podcast.component';
import { HomeModule } from './home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PqrComponent } from './pqr/pqr.component';
import { MachistometroComponent } from './machistometro/machistometro.component';
import { LibrosComponent } from './libros/libros.component';



@NgModule({
  declarations: [ PodcastComponent, PqrComponent, MachistometroComponent, LibrosComponent],
  exports: [],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
